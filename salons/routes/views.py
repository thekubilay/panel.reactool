from reactool.settings import GOOGLE_MAP_API_KEY
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from salons.routes.permissions import (IsSuperAdmin, IsAdmin, IsCompanyManager, ReadOnly)
from salons.models import (Salon, MapSetting, MapPlace, MapPlaceImage)
from salons.routes.serializers import (SalonSerializer, SalonMapPlacesSerializer, SalonMapSettingSerializer,
                                       SalonMapPlaceImagesSerializer)

from common.helpers import (set_coordinates)


class SalonsViewSet(viewsets.ModelViewSet):
  queryset = Salon.objects.all()
  serializer_class = SalonSerializer

  def get_permissions(self):
    permission_classes = [ReadOnly]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin | IsAdmin]
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
      salons = Salon.objects.all()
    else:
      salons = Salon.objects.filter(company_id=user.company)

    return salons


class SalonMapSettingViewSet(viewsets.ModelViewSet):
  queryset = MapSetting.objects.all()
  serializer_class = SalonMapSettingSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin | IsAdmin]
    if self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    else:
      permission_classes = [IsSuperAdmin | IsAdmin]

    return [permission() for permission in permission_classes]


class SalonMapPlaceViewSet(viewsets.ModelViewSet):
  queryset = MapPlace.objects.all()
  serializer_class = SalonMapPlacesSerializer

  def get_queryset(self):
    user = self.request.user
    if user.is_superuser or user.is_staff:
      places = MapPlace.objects.all()
    else:
      places = MapPlace.objects.filter(salon__company_id=user.company)

    return places

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        place = MapPlace.objects.get(id=item["id"])
        place.order_id = i + 1
        place.save()

    else:
      serializer = SalonMapPlacesSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      place = serializer.save()
      coords = set_coordinates(place)
      place.lat = coords["lat"]
      place.lng = coords["lng"]
      place.save()
      return Response(serializer.data)

    return Response(status=200)

  def partial_update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))
    serializer = self.serializer_class(instance, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    place = serializer.save()
    coords = set_coordinates(place)
    place.lat = coords["lat"]
    place.lng = coords["lng"]
    place.save()
    return Response(serializer.data)


class SalonMapPlaceImageViewSet(viewsets.ModelViewSet):
  queryset = MapPlaceImage.objects.all()
  serializer_class = SalonMapPlaceImagesSerializer

  def get_queryset(self):
    user = self.request.user
    if user.is_superuser or user.is_staff:
      images = MapPlaceImage.objects.all()
    else:
      images = MapPlaceImage.objects.filter(map_place__salon__company_id=user.company)

    return images
