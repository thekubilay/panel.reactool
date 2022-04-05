from rest_framework import serializers
from permissions.models import Project as ProjectPermission

class ProjectPermissionSerializer(serializers.ModelSerializer):
  class Meta:
    model = ProjectPermission
    fields = "__all__"
