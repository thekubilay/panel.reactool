from django.shortcuts import render
from rest_framework import viewsets
from permissions.models import Project as ProjectPermission
from permissions.routes.serializers import ProjectPermissionSerializer
from permissions.routes.permissions import (IsSuperAdmin, IsAdmin)


class ProjectPermissionsViewSet(viewsets.ModelViewSet):
  queryset = ProjectPermission.objects.all()
  serializer_class = ProjectPermissionSerializer
  permission_classes = [IsSuperAdmin | IsAdmin]
