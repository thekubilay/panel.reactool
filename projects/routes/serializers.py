from rest_framework import serializers
from projects.models import (Project, Permission, ApiToken, PRoute, Calendar, CalendarEvent, Role)
from sumaipad.routes.serializers import (PlanFieldSerializer, PlanContentSerializer,
                                         BuildingSerializer, GallerySerializer,
                                         DocumentFoldersSerializer, ColorSimulatorRoomSerializer, MapCategorySerializer,
                                         MapSettingSerializer, GeneralPlanSerializer,
                                         BuildingVrSerializer, RoomVrSerializer, BuildingBankTypeSerializer,
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
    depth = 1
    fields = ("id", "order_id", "archive", "legacy", "gallery", "name", "logo", "logo_width", "logo_height",
              "logo_place")


class ProjectPermissionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Permission
    fields = "__all__"


class ProjectApiTokenSerializer(serializers.ModelSerializer):
  class Meta:
    model = ApiToken
    fields = "__all__"


class ProjectApiTokenListSerializer(serializers.ModelSerializer):
  class Meta:
    model = ApiToken
    exclude = ("token_id",)


class RouteSerializer(serializers.ModelSerializer):
  class Meta:
    model = PRoute
    fields = "__all__"


class CalendarEventSerializer(serializers.ModelSerializer):
  class Meta:
    model = CalendarEvent
    fields = "__all__"


class CalendarSerializer(serializers.ModelSerializer):
  events = CalendarEventSerializer(many=True, required=False, read_only=True)

  class Meta:
    model = Calendar
    fields = "__all__"


class RoleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Role
    fields = '__all__'


class ProjectDetailsSerializer(serializers.ModelSerializer):
  routes = RouteSerializer(many=True, required=False)
  map_settings = MapSettingSerializer(required=False)
  map_categories = MapCategorySerializer(many=True, required=False)
  plan_fields = PlanFieldSerializer(many=True, required=False)
  plan_contents = PlanContentSerializer(many=True, required=False)
  gallery = GallerySerializer(many=True, required=False)
  links = LinkSerializer(many=True, required=False)
  documents = DocumentsSerializer(many=True, required=False)
  document_folders = DocumentFoldersSerializer(many=True, required=False)
  general_plans = GeneralPlanSerializer(many=True, required=False)
  building = BuildingSerializer(required=False)
  vista_simulator = VistaSimulatorSerializer(required=False)
  building_vr = BuildingVrSerializer(required=False)
  color_simulator_rooms = ColorSimulatorRoomSerializer(many=True, required=False)
  room_vr = RoomVrSerializer(many=True, required=False)
  permissions = ProjectPermissionSerializer(many=True, required=False)
  api_tokens = ProjectApiTokenSerializer(many=True, required=False)
  calendar = CalendarSerializer(required=False)
  bank_types = BuildingBankTypeSerializer(many=True, required=False)

  class Meta:
    model = Project
    fields = "__all__"
    # exclude = ("users",)
