from common.helpers import set_coordinates, calculate_ppm
from rest_framework import viewsets
from rest_framework.response import Response
from sumaipad.routes.permissions import (IsSuperAdmin, IsAdmin, IsCompanyManager)
from sumaipad.models import (PlanField, PlanContent, PlanContext, PlanFieldOption,
                             ColorSimulatorRoom, ColorSimulatorRoomPart, ColorSimulatorRoomPartItem,
                             VistaSimulator, MapPlace, GeneralPlan,
                             MapPlaceImage,
                             Document,
                             BuildingFloor, BuildingFloorRoom, Link, Gallery, BuildingParkingFee, BuildingBankType,
                             VistaSimulatorContent, BuildingVr, BuildingVrDirection, BuildingVrDirectionImage,
                             DocumentFolder, RoomVrNextRoom, GeneralPlanSetting, LoanSetting,
                             MapCategory, RoomVr, RoomVrFloor, PlanMenu, MapSetting, RoomVrVendor,
                             Slideshow, Building)

from sumaipad.routes.serializers import (PlanFieldSerializer, PlanContentSerializer, PlanContextSerializer,
                                         MapPlaceSerializer, BuildingFloorSerializer, BuildingFloorRoomSerializer,
                                         DocumentsSerializer, BuildingVrSerializer, BuildingVrDirectionSerializer,
                                         BuildingVrDirectionImageSerializer, LoanSettingSerializer,
                                         DocumentFoldersSerializer, MapCategorySerializer, MapSettingSerializer,
                                         GallerySerializer, PlanFieldOptionSerializer,
                                         VistaSimulatorSerializer, MapPlaceImageSerializer,
                                         LinkSerializer, RoomVrVendorSerializer, GeneralPlanSettingSerializer,
                                         ColorSimulatorRoomSerializer, ColorSimulatorRoomPartSerializer,
                                         ColorSimulatorRoomPartItemSerializer,
                                         RoomVrSerializer, RoomVrFloorSerializer, GeneralPlanSerializer,
                                         BuildingSerializer, BuildingBankTypeSerializer, BuildingParkingFeeSerializer,
                                         VistaSimulatorContentsSerializer)


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


class MapSettingViewSet(viewsets.ModelViewSet):
  queryset = MapSetting.objects.all()
  serializer_class = MapSettingSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin | IsAdmin]
    if self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    else:
      permission_classes = [IsSuperAdmin | IsAdmin]

    return [permission() for permission in permission_classes]


class MapCategoryViewSet(viewsets.ModelViewSet):
  queryset = MapCategory.objects.all()
  serializer_class = MapCategorySerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        category = MapCategory.objects.get(id=item["id"])
        category.order_id = i + 1
        category.save()
    else:
      serializer = MapCategorySerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class MapPlaceViewSet(viewsets.ModelViewSet):
  queryset = MapPlace.objects.all()
  serializer_class = MapPlaceSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        place = MapPlace.objects.get(id=item["id"])
        place.order_id = i + 1
        place.save()

    else:
      serializer = MapPlaceSerializer(data=request.data)
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

  class MapPlaceImageViewSet(viewsets.ModelViewSet):
    queryset = MapPlaceImage.objects.all()
    serializer_class = MapPlaceImageSerializer


class MapPlaceImageViewSet(viewsets.ModelViewSet):
  queryset = MapPlaceImage.objects.all()
  serializer_class = MapPlaceImageSerializer


class PlanFieldViewSet(viewsets.ModelViewSet):
  queryset = PlanField.objects.all()
  serializer_class = PlanFieldSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        field = PlanField.objects.get(id=item["id"])
        field.order_id = i + 1
        field.save()
        contexts = PlanContext.objects.filter(plan_field=field)
        for context in contexts:
          context.order_id = field.order_id
          context.save()

      return Response(status=200)
    else:
      serializer = PlanFieldSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      field = serializer.save()
      contents = PlanContent.objects.filter(project=serializer.data["project"])
      for content in contents:
        PlanContext.objects.create(order_id=field.order_id, plan_field=field, plan_content=content, field=field.type)

      return Response(serializer.data)


class PlanFieldOptionViewSet(viewsets.ModelViewSet):
  queryset = PlanFieldOption.objects.all()
  serializer_class = PlanFieldOptionSerializer

  def create(self, request, *args, **kwargs):
    updates = request.data["update"] or []
    for item in updates:
      PlanFieldOption.objects.filter(id=item["id"]).update(id=int(item["id"]), order_id=item["order_id"],
                                                           name=item["name"])

    creates = request.data["create"] or []
    for item in creates:
      PlanFieldOption.objects.create(plan_field_id=item["plan_field"], name=item["name"], order_id=item["order_id"])

    removes = request.data["remove"] or []
    for item in removes:
      option = PlanFieldOption.objects.get(id=item)
      option.delete()

    return Response(status=200)


class PlanContentViewSet(viewsets.ModelViewSet):
  queryset = PlanContent.objects.all()
  serializer_class = PlanContentSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        content = PlanContent.objects.get(id=item["id"])
        content.order_id = i + 1
        content.save()
    else:
      serializer = PlanContentSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      row = serializer.save()
      fields = PlanField.objects.filter(project=row.project)

      if "duplicate" not in request.data:
        for field in fields:
          PlanContext.objects.create(plan_field=field, order_id=field.order_id, plan_content=row, field=field.type,
                                     value=None)

      return Response(serializer.data)

    return Response(status=200)


class PlanContextViewSet(viewsets.ModelViewSet):
  queryset = PlanContext.objects.all()
  serializer_class = PlanContextSerializer

  def create(self, request, *args, **kwargs):
    if "update" in request.data:
      contexts = request.data["update"]
      for item in contexts:
        context = PlanContext.objects.get(id=item["id"])
        context.value = item["value"] or ""
        context.save()

    elif "duplicate" in request.data:
      items = request.data["duplicate"]
      for item in items:
        PlanContext.objects.create(plan_field_id=item["plan_field"]["id"], plan_content_id=item["plan_content"],
                                   order_id=item["order_id"], field=item["field"], value=item["value"])

    return Response(status=200)

  def partial_update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))
    serializer = PlanContextSerializer(instance, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    context = serializer.save()

    if context.plan_field.name == "距離画像":
      image_data = calculate_ppm(context.image)
      context.ppm = image_data["ppm"]

      context.save()

    return Response(serializer.data)

  def update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))
    serializer = PlanContextSerializer(instance, data=request.data)
    serializer.is_valid(raise_exception=True)
    context = serializer.save()
    if context.plan_field.name == "距離画像":
      image_data = calculate_ppm(context.image)
      context.ppm = image_data["ppm"]
      context.save()

    return Response(serializer.data)


class GeneralPlanViewSet(viewsets.ModelViewSet):
  queryset = GeneralPlan.objects.all()
  serializer_class = GeneralPlanSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        plan = GeneralPlan.objects.get(id=item["id"])
        plan.order_id = i + 1
        plan.save()

      return Response(status=200)

    else:
      serializer = GeneralPlanSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


class GeneralPlanSettingViewSet(viewsets.ModelViewSet):
  queryset = GeneralPlanSetting.objects.all()
  serializer_class = GeneralPlanSettingSerializer

  def create(self, request, *args, **kwargs):
    pass

  def delete(self, request, *args, **kwargs):
    pass

  def list(self, request, *args, **kwargs):
    pass


class LoanSettingViewSet(viewsets.ModelViewSet):
  queryset = LoanSetting.objects.all()
  serializer_class = LoanSettingSerializer

  def create(self, request, *args, **kwargs):
    pass

  def delete(self, request, *args, **kwargs):
    pass

  def list(self, request, *args, **kwargs):
    pass


class BuildingVrViewSet(viewsets.ModelViewSet):
  queryset = BuildingVr.objects.all()
  serializer_class = BuildingVrSerializer

  def list(self, request, *args, **kwargs):
    return Response(status=200)


class BuildingVrDirectionViewSet(viewsets.ModelViewSet):
  queryset = BuildingVrDirection.objects.all()
  serializer_class = BuildingVrDirectionSerializer

  def list(self, request, *args, **kwargs):
    return Response(status=200)

  def create(self, request, *args, **kwargs):
    data = request.data["create"] or []
    remove = request.data["remove"] or []

    for item in remove:
      if item["id"] is not None:
        exists = BuildingVrDirection.objects.filter(id=item["id"]).exists()
        if exists:
          direction = BuildingVrDirection.objects.get(id=item["id"])
          direction.delete()

    for item in data:
      if item["id"] is None:
        BuildingVrDirection.objects.create(building_vr_id=item["building_vr"], name=item["name"])
      else:
        exists = BuildingVrDirection.objects.filter(id=item["id"]).exists()
        if exists:
          direction = BuildingVrDirection.objects.get(id=item["id"])
          direction.name = item["name"]
          direction.save()

    return Response(status=200)


class BuildingVrDirectionImageViewSet(viewsets.ModelViewSet):
  queryset = BuildingVrDirectionImage.objects.all()
  serializer_class = BuildingVrDirectionImageSerializer

  def list(self, request, *args, **kwargs):
    return Response(status=200)


class BuildingViewSet(viewsets.ModelViewSet):
  queryset = Building.objects.all()
  serializer_class = BuildingSerializer

  def create(self, request, *args, **kwargs):
    return Response(status=200)

  def list(self, request, *args, **kwargs):
    return Response(status=200)

  def destroy(self, request, *args, **kwargs):
    return Response(status=200)


class BuildingFloorViewSet(viewsets.ModelViewSet):
  queryset = BuildingFloor.objects.all()
  serializer_class = BuildingFloorSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        floor = BuildingFloor.objects.get(id=item["id"])
        floor.order_id = i + 1
        floor.save()

      return Response(status=200)

    else:
      serializer = BuildingFloorSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

  def list(self, request, *args, **kwargs):
    return Response(status=200)

  def update(self, request, *args, **kwargs):
    return Response(status=200)

  def partial_update(self, request, *args, **kwargs):
    return Response(status=200)


class BuildingFloorRoomViewSet(viewsets.ModelViewSet):
  queryset = BuildingFloorRoom.objects.all()
  serializer_class = BuildingFloorRoomSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        room = BuildingFloorRoom.objects.get(id=item["id"])
        room.order_id = i + 1
        room.save()

      return Response(status=200)

    if "create" in request.data:
      items = request.data["create"]
      for i, item in enumerate(items):
        BuildingFloorRoom.objects.create(building_floor_id=item["building_floor"], order_id=i + 1)
      return Response(status=200)
    elif "duplicate" in request.data:
      items = request.data["duplicate"]
      for i, item in enumerate(items):
        BuildingFloorRoom.objects.create(building_floor_id=item["building_floor"], order_id=i + 1,
                                         number=item["number"], status=item["status"], menu=item["menu"],
                                         type=item["type"], m2=item["m2"], plan=item["plan"],
                                         price=item["price"], management_fee=item["management_fee"],
                                         fixing_fee=item["fixing_fee"], sub=item["sub"],
                                         sub_content=item["sub_content"])
      return Response(status=200)
    else:
      serializer = BuildingFloorRoomSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

  def list(self, request, *args, **kwargs):
    return Response(status=200)


class VistaSimulatorViewSet(viewsets.ModelViewSet):
  queryset = VistaSimulator.objects.all()
  serializer_class = VistaSimulatorSerializer


class VistaSimulatorContentViewSet(viewsets.ModelViewSet):
  queryset = VistaSimulatorContent.objects.all()
  serializer_class = VistaSimulatorContentsSerializer

  def partial_update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))

    serializer = VistaSimulatorContentsSerializer(instance, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    context = serializer.save()
    if "plan_type" not in request.data:
      context.plan_type = None
      context.save()

    return Response(serializer.data)


class ColorSimulatorRoomViewSet(viewsets.ModelViewSet):
  queryset = ColorSimulatorRoom.objects.all()
  serializer_class = ColorSimulatorRoomSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        room = ColorSimulatorRoom.objects.get(id=item["id"])
        room.order_id = i + 1
        room.name = item["name"]
        room.save()

      return Response(status=200)

    else:
      rooms = ColorSimulatorRoom.objects.filter(project_id=request.data["project"])
      request.data._mutable = True
      request.data["order_id"] = 1 if len(rooms) > 1 else len(rooms) + 1
      serializer = ColorSimulatorRoomSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

  def partial_update(self, request, *args, **kwargs):
    if "option_context" not in request.data:
      request.data._mutable = True
      request.data["option_context"] = None

    instance = self.queryset.get(pk=kwargs.get('pk'))
    serializer = ColorSimulatorRoomSerializer(instance, data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(serializer.data)


class ColorSimulatorRoomPartViewSet(viewsets.ModelViewSet):
  queryset = ColorSimulatorRoomPart.objects.all()
  serializer_class = ColorSimulatorRoomPartSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        part = ColorSimulatorRoomPart.objects.get(id=item["id"])
        part.order_id = i + 1
        part.save()

      return Response(status=200)

    else:
      parts = ColorSimulatorRoomPart.objects.filter(color_simulator_room_id=request.data["color_simulator_room"])
      request.data._mutable = True
      request.data["order_id"] = 1 if len(parts) > 1 else len(parts) + 1
      serializer = ColorSimulatorRoomPartSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


class ColorSimulatorRoomPartItemViewSet(viewsets.ModelViewSet):
  queryset = ColorSimulatorRoomPartItem.objects.all()
  serializer_class = ColorSimulatorRoomPartItemSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        part_item = ColorSimulatorRoomPartItem.objects.get(id=item["id"])
        part_item.order_id = i + 1
        part_item.save()

      return Response(status=200)

    else:
      parts = ColorSimulatorRoomPartItem.objects.filter(
        color_simulator_room_part_id=request.data["color_simulator_room_part"])
      request.data._mutable = True
      request.data["order_id"] = 1 if len(parts) > 1 else len(parts) + 1
      serializer = ColorSimulatorRoomPartItemSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


class RoomVrViewSet(viewsets.ModelViewSet):
  queryset = RoomVr.objects.all()
  serializer_class = RoomVrSerializer


class RoomVrVendorViewSet(viewsets.ModelViewSet):
  queryset = RoomVrVendor.objects.all()
  serializer_class = RoomVrVendorSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for item in items:
        RoomVrVendor.objects.filter(id=int(item["id"])).update(order_id=item["order_id"])

      return Response(status=200)

    else:
      serializer = RoomVrVendorSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


class RoomVrFloorViewSet(viewsets.ModelViewSet):
  queryset = RoomVrFloor.objects.all()
  serializer_class = RoomVrFloorSerializer


class RoomVrNextRoomViewSet(viewsets.ModelViewSet):
  queryset = RoomVrNextRoom.objects.all()
  serializer_class = RoomVrFloorSerializer

  def create(self, request, *args, **kwargs):
    for item in request.data["create"]:
      if "id" in item:
        portal = RoomVrNextRoom.objects.get(id=item["id"])
        portal.next_room = item["next_room"]
        portal.button_x = item["button_x"]
        portal.button_y = item["button_y"]
        portal.save()
      else:
        RoomVrNextRoom.objects.create(room_vr_floor_id=item["room_vr_floor"],
                                      next_room=item["next_room"],
                                      button_x=item["button_x"],
                                      button_y=item["button_y"])

    return Response(status=200)


class LoanBankTypeViewSet(viewsets.ModelViewSet):
  queryset = BuildingBankType.objects.all()
  serializer_class = BuildingBankTypeSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        bank_type = BuildingBankType.objects.get(id=item["id"])
        bank_type.order_id = i + 1
        bank_type.save()

      return Response(status=200)

    else:
      serializer = BuildingBankTypeSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)


class ParkingFeeViewSet(viewsets.ModelViewSet):
  queryset = BuildingParkingFee.objects.all()
  serializer_class = BuildingParkingFeeSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        parking_fee = BuildingParkingFee.objects.get(id=item["id"])
        parking_fee.order_id = i + 1
        parking_fee.save()

      return Response(status=200)

    else:
      serializer = BuildingParkingFeeSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)
