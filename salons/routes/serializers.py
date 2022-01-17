from rest_framework import serializers
from salons.models import Salon, MapSetting, MapPlace, MapPlaceImage

class SalonMapPlaceImagesSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapPlaceImage
    fields = "__all__"

class SalonMapPlacesSerializer(serializers.ModelSerializer):
  map_place_images = SalonMapPlaceImagesSerializer(many=True, read_only=True, required=False)

  class Meta:
    model = MapPlace
    fields = ("id", "order_id", "salon", "show_directions", "place", "address", "context", "lat", "lng", "pin", "map_place_images")


class SalonMapSettingSerializer(serializers.ModelSerializer):
  class Meta:
    model = MapSetting
    fields = "__all__"


class SalonSerializer(serializers.ModelSerializer):
  map_settings = SalonMapSettingSerializer(read_only=True)
  map_places = SalonMapPlacesSerializer(read_only=True, many=True)

  class Meta:
    model = Salon
    fields = ("id", "order_id", "name", "company", "map_settings", "map_places")
