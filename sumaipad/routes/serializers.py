from rest_framework import serializers
from sumaipad.models import (Plan, PlanTypeImage, PlanImage, RoomSimulator, RoomSimulatorContent,
                             RoomSimulatorContentTitle, PlanMenu, Route,
                             VistaSimulator, VistaSimulatorContent, CoordImage, Coord, Building, Floor, Room, Document,
                             RoomVr, RoomVrFloor, MapSetting,
                             DocumentFolder, Link, Gallery, BuildingBankType, MapCategory,
                             BuildingParkingFee, RoomSimulatorImage, RoomSimulatorColorImage, RoomSimulatorBaseImage)


class RouteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Route
    fields = "__all__"


class LinkSerializer(serializers.ModelSerializer):
  class Meta:
    model = Link
    fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = Gallery
    fields = "__all__"


class PlanMenuSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanMenu
    fields = "__all__"


class PlanTypeImagesSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanTypeImage
    fields = "__all__"


class PlansSerializer(serializers.ModelSerializer):
  type_image = PlanTypeImagesSerializer(required=False)

  class Meta:
    model = Plan
    fields = "__all__"


class PlanImagesSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanImage
    fields = "__all__"


class RoomSimulatorImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomSimulatorImage
    fields = "__all__"


class RoomSimulatorColorImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomSimulatorColorImage
    fields = "__all__"


class RoomSimulatorContentSerializer(serializers.ModelSerializer):
  room_sim_image = RoomSimulatorImageSerializer(required=False)
  room_sim_color_image = RoomSimulatorColorImageSerializer(required=False)

  class Meta:
    model = RoomSimulatorContent
    fields = "__all__"


class RoomSimulatorContentTitleSerializer(serializers.ModelSerializer):
  room_contents = RoomSimulatorContentSerializer(many=True, required=False)

  class Meta:
    model = RoomSimulatorContentTitle
    fields = "__all__"


class RoomSimulatorBaseImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomSimulatorBaseImage
    fields = "__all__"


class RoomSimulatorSerializer(serializers.ModelSerializer):
  room_sim_base_image = RoomSimulatorBaseImageSerializer(required=False)
  room_content_titles = RoomSimulatorContentTitleSerializer(many=True, required=False)

  class Meta:
    model = RoomSimulator
    fields = "__all__"


class VistaSimulatorContentsSerializer(serializers.ModelSerializer):
  class Meta:
    model = VistaSimulatorContent
    fields = "__all__"


class VistaSimulatorSerializer(serializers.ModelSerializer):
  vista_simulator_contents = VistaSimulatorContentsSerializer(many=True, required=False)

  class Meta:
    model = VistaSimulator
    fields = "__all__"


class CoordImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = CoordImage
    fields = "__all__"


class BuildingParkingFeeSerializer(serializers.ModelSerializer):
  class Meta:
    model = BuildingParkingFee
    fields = "__all__"


class BuildingBankTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = BuildingBankType
    fields = "__all__"


class MapSettingSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapSetting
    fields = "__all__"


class CoordsSerializer(serializers.ModelSerializer):
  coord_images = CoordImageSerializer(many=True, required=False)

  class Meta:
    model = Coord
    fields = "__all__"


class MapCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = MapCategory
    fields = "__all__"


class DocumentsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Document
    fields = "__all__"


class DocumentFoldersSerializer(serializers.ModelSerializer):
  documents = DocumentsSerializer(many=True, required=False)

  class Meta:
    model = DocumentFolder
    fields = "__all__"


class RoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = Room
    fields = "__all__"


class FloorSerializer(serializers.ModelSerializer):
  rooms = RoomSerializer(many=True, required=False)

  class Meta:
    model = Floor
    fields = "__all__"


class BuildingSerializer(serializers.ModelSerializer):
  parking_fees = BuildingParkingFeeSerializer(many=True, required=False)
  bank_types = BuildingBankTypeSerializer(many=True, required=False)
  floors = FloorSerializer(many=True, required=False)

  class Meta:
    model = Building
    fields = "__all__"


class RoomVrFloorSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomVrFloor
    fields = "__all__"


class RoomVrSerializer(serializers.ModelSerializer):
  floors = RoomVrFloorSerializer(many=True, required=False)

  class Meta:
    model = RoomVr
    fields = "__all__"
