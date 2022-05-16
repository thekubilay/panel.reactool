from rest_framework import serializers
from sumaipad.models import (ColorSimulatorRoom, ColorSimulatorRoomPart,
                             ColorSimulatorRoomPartItem, PlanContent, PlanField,
                             VistaSimulator, VistaSimulatorContent, MapPlace, MapPlaceImage, Building, BuildingFloor,
                             BuildingFloorRoom, LoanSetting,
                             Document, PlanContext, PlanFieldOption, GeneralPlan, GeneralPlanSetting,
                             RoomVr, RoomVrFloor, MapSetting, RoomVrNextRoom,
                             BuildingVr, BuildingVrDirection, BuildingVrDirectionImage,
                             DocumentFolder, Link, Gallery, BuildingBankType, MapCategory,
                             BuildingParkingFee, RoomVrVendor)


class LinkSerializer(serializers.ModelSerializer):
  class Meta:
    model = Link
    fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = Gallery
    fields = "__all__"


class PlanFieldOptionSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanFieldOption
    fields = "__all__"


class PlanFieldSerializer(serializers.ModelSerializer):
  plan_field_options = PlanFieldOptionSerializer(many=True, required=False)

  class Meta:
    model = PlanField
    fields = "__all__"


class PlanContextSerializer(serializers.ModelSerializer):
  class Meta:
    model = PlanContext
    fields = "__all__"
    depth = 1


class PlanContentSerializer(serializers.ModelSerializer):
  plan_contexts = PlanContextSerializer(many=True, required=False)

  class Meta:
    model = PlanContent
    fields = "__all__"


class GeneralPlanSerializer(serializers.ModelSerializer):
  class Meta:
    model = GeneralPlan
    fields = "__all__"


class GeneralPlanSettingSerializer(serializers.ModelSerializer):
  class Meta:
    model = GeneralPlanSetting
    fields = "__all__"


class LoanSettingSerializer(serializers.ModelSerializer):
  class Meta:
    model = LoanSetting
    fields = "__all__"


class ColorSimulatorRoomPartItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = ColorSimulatorRoomPartItem
    fields = "__all__"


class ColorSimulatorRoomPartSerializer(serializers.ModelSerializer):
  room_part_items = ColorSimulatorRoomPartItemSerializer(many=True, required=False)

  class Meta:
    model = ColorSimulatorRoomPart
    fields = "__all__"


class ColorSimulatorRoomSerializer(serializers.ModelSerializer):
  room_parts = ColorSimulatorRoomPartSerializer(many=True, required=False)

  class Meta:
    model = ColorSimulatorRoom
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


class MapPlaceImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapPlaceImage
    fields = "__all__"


class MapPlaceSerializer(serializers.ModelSerializer):
  map_place_images = MapPlaceImageSerializer(many=True, required=False)

  class Meta:
    model = MapPlace
    fields = "__all__"


class MapCategorySerializer(serializers.ModelSerializer):
  map_places = MapPlaceSerializer(many=True, required=False)

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


class BuildingVrDirectionImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = BuildingVrDirectionImage
    fields = "__all__"


class BuildingVrDirectionSerializer(serializers.ModelSerializer):
  building_vr_direction_images = BuildingVrDirectionImageSerializer(many=True, required=False)

  class Meta:
    model = BuildingVrDirection
    fields = "__all__"


class BuildingVrSerializer(serializers.ModelSerializer):
  building_vr_directions = BuildingVrDirectionSerializer(many=True, required=False)

  class Meta:
    model = BuildingVr
    fields = "__all__"


class BuildingFloorRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = BuildingFloorRoom
    fields = "__all__"


class BuildingFloorSerializer(serializers.ModelSerializer):
  rooms = BuildingFloorRoomSerializer(many=True, required=False)

  class Meta:
    model = BuildingFloor
    fields = "__all__"


class BuildingSerializer(serializers.ModelSerializer):
  parking_fees = BuildingParkingFeeSerializer(many=True, required=False)
  bank_types = BuildingBankTypeSerializer(many=True, required=False)
  floors = BuildingFloorSerializer(many=True, required=False)

  class Meta:
    model = Building
    fields = "__all__"


class RoomVrNextRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomVrNextRoom
    fields = "__all__"


class RoomVrFloorSerializer(serializers.ModelSerializer):
  next_rooms = RoomVrNextRoomSerializer(many=True, required=False)

  class Meta:
    model = RoomVrFloor
    fields = "__all__"


class RoomVrSerializer(serializers.ModelSerializer):
  floors = RoomVrFloorSerializer(many=True, required=False)

  class Meta:
    model = RoomVr
    fields = "__all__"


class RoomVrVendorSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomVrVendor
    fields = "__all__"
