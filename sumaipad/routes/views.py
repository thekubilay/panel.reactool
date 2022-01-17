from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from sumaipad.routes.permissions import (IsSuperAdmin, IsAdmin, IsCompanyManager)
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from sumaipad.models import (Plan, PlanTypeImage, PlanImage, VistaSimulator, Coord, CoordImage, Document,
                             Floor, Room, Link, Gallery, BuildingParkingFee, BuildingBankType,
                             VistaSimulatorContent, Route,
                             DocumentFolder, RoomSimulatorImage, RoomSimulatorColorImage, RoomSimulatorContentTitle,
                             MapCategory, RoomVr, RoomVrFloor, PlanMenu, MapSetting,
                             Slideshow, Building, RoomSimulator, RoomSimulatorContent, RoomSimulatorBaseImage)
from sumaipad.routes.serializers import (PlansSerializer, PlanImagesSerializer, PlanTypeImagesSerializer,
                                         CoordsSerializer, FloorSerializer, RoomSerializer, DocumentsSerializer,
                                         DocumentFoldersSerializer, MapCategorySerializer, MapSettingSerializer,
                                         GallerySerializer, PlanMenuSerializer,
                                         VistaSimulatorSerializer, CoordImageSerializer, RouteSerializer,
                                         RoomSimulatorSerializer, RoomSimulatorContentSerializer,
                                         LinkSerializer, RoomSimulatorColorImageSerializer,
                                         RoomVrSerializer, RoomVrFloorSerializer,
                                         RoomSimulatorImageSerializer, RoomSimulatorContentTitleSerializer,
                                         BuildingSerializer, BuildingBankTypeSerializer, BuildingParkingFeeSerializer,
                                         RoomSimulatorBaseImageSerializer, VistaSimulatorContentsSerializer)


class RouteViewSet(viewsets.ModelViewSet):
  queryset = Route.objects.all()
  serializer_class = RouteSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        route = Route.objects.get(id=item["id"])
        route.order_id = i + 1
        route.save()
    else:
      serializer = RouteSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class GalleryViewSet(viewsets.ModelViewSet):
  queryset = Gallery.objects.all()
  serializer_class = GallerySerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        gallery = Gallery.objects.get(id=item["id"])
        gallery.order_id = i + 1
        gallery.save()
    else:
      serializer = GallerySerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class LinkViewSet(viewsets.ModelViewSet):
  queryset = Link.objects.all()
  serializer_class = LinkSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        link = Link.objects.get(id=item["id"])
        link.order_id = i + 1
        link.save()
    else:
      serializer = LinkSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class DocumentFolderViewSet(viewsets.ModelViewSet):
  queryset = DocumentFolder.objects.all()
  serializer_class = DocumentFoldersSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        folder = DocumentFolder.objects.get(id=item["id"])
        folder.order_id = i + 1
        folder.save()
    else:
      serializer = DocumentFoldersSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class DocumentViewSet(viewsets.ModelViewSet):
  queryset = Document.objects.all()
  serializer_class = DocumentsSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        document = Document.objects.get(id=item["id"])
        document.order_id = i + 1
        document.save()
    else:
      serializer = DocumentsSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)

#
# class PlanViewSet(ModelViewSet):
#   queryset = Plan.objects.all()
#   serializer_class = PlansSerializer
#
#
# class PlanMenuViewSet(ModelViewSet):
#   queryset = PlanMenu.objects.all()
#   serializer_class = PlanMenuSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         menu = PlanMenu.objects.get(id=item["id"])
#         menu.order_id = item["order_id"]
#         menu.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class PlanTypeImageViewSet(ModelViewSet):
#   queryset = PlanTypeImage.objects.all()
#   serializer_class = PlanTypeImagesSerializer
#
#
# class PlanImageViewSet(ModelViewSet):
#   queryset = PlanImage.objects.all()
#   serializer_class = PlanImagesSerializer
#
#
# class RoomSimulatorViewSet(ModelViewSet):
#   queryset = RoomSimulator.objects.all()
#   serializer_class = RoomSimulatorSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         room = RoomSimulator.objects.get(id=item["id"])
#         room.order_id = item["order_id"]
#         room.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class RoomSimulatorContentTitleViewSet(ModelViewSet):
#   queryset = RoomSimulatorContentTitle.objects.all()
#   serializer_class = RoomSimulatorContentTitleSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         room = RoomSimulatorContentTitle.objects.get(id=item["id"])
#         room.order_id = item["order_id"]
#         room.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class RoomSimulatorContentViewSet(ModelViewSet):
#   queryset = RoomSimulatorContent.objects.all()
#   serializer_class = RoomSimulatorContentSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         content = RoomSimulatorContent.objects.get(id=item["id"])
#         content.order_id = item["order_id"]
#         content.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class RoomSimulatorImageViewSet(ModelViewSet):
#   queryset = RoomSimulatorImage.objects.all()
#   serializer_class = RoomSimulatorImageSerializer
#
#
# class RoomSimulatorBaseImageViewSet(ModelViewSet):
#   queryset = RoomSimulatorBaseImage.objects.all()
#   serializer_class = RoomSimulatorBaseImageSerializer
#
#
# class RoomSimulatorColorImageViewSet(ModelViewSet):
#   queryset = RoomSimulatorColorImage.objects.all()
#   serializer_class = RoomSimulatorColorImageSerializer
#
#
# class VistaSimulatorViewSet(ModelViewSet):
#   queryset = VistaSimulator.objects.all()
#   serializer_class = VistaSimulatorSerializer
#
#
# class VistaSimulatorContentsViewSet(ModelViewSet):
#   queryset = VistaSimulatorContent.objects.all()
#   serializer_class = VistaSimulatorContentsSerializer
#
#
# class CoordViewSet(ModelViewSet):
#   queryset = Coord.objects.all()
#   serializer_class = CoordsSerializer
#   permission_classes = [IsSuper | IsAdminUser]
#
#
# class MapSettingViewSet(ModelViewSet):
#   queryset = MapSetting.objects.all()
#   serializer_class = MapSettingSerializer
#   permission_classes = [IsSuper | IsAdminUser]
#
#
# class MapCategoryViewSet(ModelViewSet):
#   queryset = MapCategory.objects.all()
#   serializer_class = MapCategorySerializer
#   permission_classes = [IsSuper | IsAdminUser]
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         category = MapCategory.objects.get(id=item["id"])
#         category.order_id = item["order_id"]
#         category.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class CoordImageViewSet(ModelViewSet):
#   queryset = CoordImage.objects.all()
#   serializer_class = CoordImageSerializer
#   permission_classes = [IsSuper | IsAdminUser]
#
#
# class BuildingParkingFeeViewSet(ModelViewSet):
#   queryset = BuildingParkingFee.objects.all()
#   serializer_class = BuildingParkingFeeSerializer
#
#
# class BuildingBankTypeViewSet(ModelViewSet):
#   queryset = BuildingBankType.objects.all()
#   serializer_class = BuildingBankTypeSerializer
#
#
# class DocumentsViewSet(ModelViewSet):
#   queryset = Document.objects.all()
#   serializer_class = DocumentsSerializer
#
#
# class DocumentFoldersViewSet(ModelViewSet):
#   queryset = DocumentFolder.objects.all()
#   serializer_class = DocumentFoldersSerializer
#   permission_classes = [IsSuper | IsAdminUser]
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         doc = DocumentFolder.objects.get(id=item["id"])
#         doc.order_id = item["order_id"]
#         doc.save()
#
#       return Response(status=status.HTTP_200_OK)
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class LinksViewSet(ModelViewSet):
#   queryset = Link.objects.all()
#   serializer_class = LinksSerializer
#
#
# class GalleryViewSet(ModelViewSet):
#   queryset = Gallery.objects.all()
#   serializer_class = GallerySerializer
#
#
# class SlideshowViewSet(ModelViewSet):
#   queryset = Slideshow.objects.all()
#   serializer_class = SlideshowSerializer
#
#
# class RoomViewSet(ModelViewSet):
#   queryset = Room.objects.all()
#   serializer_class = RoomSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "array" in request.data:
#       items = request.data["array"]
#       for item in items:
#         serializer = self.get_serializer(data=item)
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer)
#
#       return Response(status=status.HTTP_200_OK)
#
#     elif "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         room = Room.objects.get(id=item["id"])
#         room.order_id = item["order_id"]
#         room.save()
#
#       return Response(status=status.HTTP_200_OK)
#
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class FloorViewSet(ModelViewSet):
#   queryset = Floor.objects.all()
#   serializer_class = FloorSerializer
#
#   def create(self, request, *args, **kwargs):
#     if "ordered" in request.data:
#       items = request.data["ordered"]
#       for item in items:
#         floor = Floor.objects.get(id=item["id"])
#         floor.order_id = item["order_id"]
#         floor.save()
#
#       return Response(status=status.HTTP_200_OK)
#
#     else:
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       self.perform_create(serializer)
#       return Response(serializer.data)
#
#
# class BuildingViewSet(ModelViewSet):
#   queryset = Building.objects.all()
#   serializer_class = BuildingSerializer
#
#
# class RoomVrViewSet(ModelViewSet):
#   queryset = RoomVr.objects.all()
#   serializer_class = RoomVrSerializer
#
#
# class RoomVrFloorViewSet(ModelViewSet):
#   queryset = RoomVrFloor.objects.all()
#   serializer_class = RoomVrFloorSerializer
#
