from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from logs.models import Error, Action
from logs.routes.serializers import ErrorSerializer, ActionSerializer
from logs.routes.permissions import IsSuperAdmin


class ErrorViewSet(viewsets.ModelViewSet):
  queryset = Error.objects.all()
  permission_classes = [IsSuperAdmin]
  serializer_class = ErrorSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin]
    if self.action == "create":
      permission_classes = [IsAuthenticated]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "destroy":
      permission_classes = [IsSuperAdmin]
    elif self.action == "list":
      permission_classes = [IsSuperAdmin]
    elif self.action == "retrieve":
      permission_classes = [IsSuperAdmin]

    return [permission() for permission in permission_classes]


class ActionViewSet(viewsets.ModelViewSet):
  queryset = Action.objects.all()
  permission_classes = [IsSuperAdmin]
  serializer_class = ActionSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin]
    if self.action == "create":
      permission_classes = [IsAuthenticated]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin]
    elif self.action == "destroy":
      permission_classes = [IsSuperAdmin]
    elif self.action == "list":
      permission_classes = [IsSuperAdmin]
    elif self.action == "retrieve":
      permission_classes = [IsSuperAdmin]

    return [permission() for permission in permission_classes]
