import json

from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from projects.routes.permissions import (IsSuperAdmin, IsAdmin, IsCompanyManager, ReadOnly)
from projects.models import (Project)
from projects.routes.serializers import (ProjectsSerializer, ProjectDetailsSerializer, ProjectForSalonSerializer)
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


class ProjectDetailsViewSet(generics.RetrieveAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectDetailsSerializer
  permission_classes = [ReadOnly]
  #
  # def retrieve(self, request, *args, **kwargs):
  #   project = get_object_or_404(self.queryset, pk=self.kwargs['pk'])
  #   serializer = ProjectDetailsSerializer(project)
  #   # if project.salon is not None:
  #   #   projects = Project.objects.filter(salon=project.salon)
  #   #   for p in projects:
  #   #     print(p)
  #   #     s = ProjectForSalonSerializer(p)
  #   #     print(s)
  #   #     # serializer.data.append(s.data)
  #   # else:
  #   #   serializer.data["projects"] = []
  #   #
  #   # # print(serializer.data["projects"])
  #   return Response(serializer.data)
  #
