from rest_framework import serializers
from projects.models import (Project)
from sumaipad.routes.serializers import (RouteSerializer, PlansSerializer, PlanImagesSerializer, MapCategorySerializer,
                                         CoordsSerializer, BuildingSerializer, GallerySerializer,
                                         DocumentFoldersSerializer, RoomSimulatorSerializer,
                                         RoomVrSerializer, PlanMenuSerializer, MapSettingSerializer,
                                         VistaSimulatorSerializer, LinkSerializer, DocumentsSerializer)


class ProjectsForCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = ("id", "salon", "name", "archive", "path")


class ProjectsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = "__all__"


class ProjectForSalonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = ("id", "order_id", "archive", "gallery", "name")


class ProjectDetailsSerializer(serializers.ModelSerializer):
  routes = RouteSerializer(many=True, required=False)
  gallery = GallerySerializer(many=True, required=False)
  links = LinkSerializer(many=True, required=False)
  documents = DocumentsSerializer(many=True, required=False)
  document_folders = DocumentFoldersSerializer(many=True, required=False)

  class Meta:
    model = Project
    exclude = ("user",)
