import json
import datetime

from reactool.settings import DEBUG
from django.utils import timezone
from common.api_token_permission import api_token_project_permission, api_token_salon_permission
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from salons.models import Salon
from salons.routes.serializers import SalonSerializer
from projects.routes.permissions import (IsSuperAdmin, IsAdmin, IsCompanyManager, ReadOnly)
from projects.models import (Project, ApiToken, PRoute, Permission, Calendar, CalendarEvent)
from projects.routes.serializers import (ProjectsSerializer, ProjectDetailsSerializer, ProjectForSalonSerializer,
                                         CalendarSerializer, CalendarEventSerializer,
                                         ProjectApiTokenSerializer, ProjectApiTokenListSerializer, RouteSerializer,
                                         ProjectPermissionSerializer)
from rest_framework.response import Response
from common.helpers import (set_coordinates, )


class ProjectsViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectsSerializer

  def get_permissions(self):
    permission_classes = [ReadOnly]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    elif self.action == "destroy":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "list":
      permission_classes = [IsAuthenticated]
    elif self.action == "retrieve":
      permission_classes = [ReadOnly]

    return [permission() for permission in permission_classes]

  def get_queryset(self):
    user = self.request.user
    if user.is_superuser or user.is_staff:
      projects = Project.objects.all()
    else:
      projects = Project.objects.filter(salon__company=user.company)

    return projects

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        project = Project.objects.get(id=item["id"])
        project.order_id = i + 1
        project.save()
    else:
      serializer = ProjectsSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)

  def partial_update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))
    serializer = ProjectsSerializer(instance, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    project = serializer.save()
    coords = set_coordinates(project)
    project.lat = coords["lat"]
    project.lng = coords["lng"]
    project.save()
    return Response(serializer.data)


class RouteViewSet(viewsets.ModelViewSet):
  queryset = PRoute.objects.all()
  serializer_class = RouteSerializer
  permission_classes = [IsSuperAdmin | IsAdmin]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        route = PRoute.objects.get(id=item["id"])
        route.order_id = i + 1
        route.save()
    else:
      serializer = RouteSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class CalendarViewSet(viewsets.ModelViewSet):
  queryset = Calendar.objects.all()
  serializer_class = CalendarSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def destroy(self, request, *args, **kwargs):
    pass

  def create(self, request, *args, **kwargs):
    pass


class CalendarEventViewSet(viewsets.ModelViewSet):
  queryset = CalendarEvent.objects.all()
  serializer_class = CalendarEventSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "holiday" in request.data:
      for rm in request.data["remove"]:

        try:
          calendar = CalendarEvent.objects.get(calendar_id=rm["calendar"], is_holiday=True, start=rm["start"])
          calendar.delete()
        except CalendarEvent.DoesNotExist:
          pass

      for holiday in request.data["holiday"]:
        if CalendarEvent.objects.filter(calendar_id=holiday["calendar"], is_holiday=True,
                                        start=holiday["start"]).exists() is False:
          CalendarEvent.objects.create(calendar_id=holiday["calendar"], is_holiday=True, title=holiday["title"],
                                       start=holiday["start"], end=holiday["end"], display="background",
                                       color=holiday["color"], allDay=True)

      return Response({"status": 201})
    else:
      serializer = CalendarEventSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()

    return Response(serializer.data)
  #
  # def partial_update(self, request, *args, **kwargs):
  #   instance = self.queryset.get(pk=kwargs.get('pk'))
  #   serializer = self.serializer_class(instance, data=request.data, partial=True)
  #   serializer.is_valid(raise_exception=True)
  #   event = serializer.save()
  #   event.save()
  #
  #   local_start = timezone.localtime(event.start)
  #   local_end = timezone.localtime(event.end)
  #   event.start = local_start
  #   event.end = local_end
  #   event.save()
  #
  #   return Response(serializer.data)


class PermissionViewSet(viewsets.ModelViewSet):
  queryset = Permission.objects.all()
  serializer_class = ProjectPermissionSerializer
  permission_classes = [IsSuperAdmin | IsAdmin]

  def create(self, request, *args, **kwargs):
    serializer = ProjectPermissionSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


class ProjectDetailsViewSet(generics.RetrieveAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectDetailsSerializer
  permission_classes = [ReadOnly]

  def retrieve(self, request, *args, **kwargs):
    content = {"status": 200, "salon": None, "project": None}
    token = self.request.query_params.get('token')

    if self.request.user.is_anonymous:
      if Project.objects.filter(id=self.kwargs['pk']).exists():
        project = get_object_or_404(self.queryset, pk=self.kwargs['pk'])
        permission_check = api_token_project_permission(project, token)

        if permission_check:
          serializer = ProjectDetailsSerializer(project)
          content["project"] = serializer.data
          if project.salon is not None:
            projects = Project.objects.filter(salon=project.salon, archive=False, salon_view=True)
            content["salon"] = []
            for p in projects:
              s = ProjectForSalonSerializer(p)
              content["salon"].append(s.data)
        else:
          content["status"] = 401

      # salon id
      elif Salon.objects.filter(id=self.kwargs["pk"]).exists():
        salon = get_object_or_404(Salon.objects.all(), pk=self.kwargs['pk'])
        permission_check = api_token_project_permission(salon, token)

        if permission_check:
          serializer = SalonSerializer(salon)
          content["salon"] = serializer.data
        else:
          content["status"] = 401

    else:
      project = get_object_or_404(self.queryset, pk=self.kwargs['pk'])
      serializer = ProjectDetailsSerializer(project)
      return Response(serializer.data)

    return Response(content)


class ProjectApiTokenViewSet(viewsets.ModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectApiTokenSerializer

  def get_serializer_class(self):
    if not self.get_queryset():  # Check your conditions here
      return ProjectApiTokenListSerializer
    else:
      return ProjectApiTokenSerializer

  def get_permissions(self):
    permission_classes = [ReadOnly]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "destroy":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    elif self.action == "list":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    elif self.action == "retrieve":
      permission_classes = [IsSuperAdmin]

    return [permission() for permission in permission_classes]

  def get_queryset(self):

    user = self.request.user
    if user.is_superuser or user.is_staff:
      tokens = ApiToken.objects.all()
    else:
      tokens = ApiToken.objects.filter(project__salon__company__exact=user.company)

    return tokens

  def create(self, request, *args, **kwargs):
    serializer = ProjectApiTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
