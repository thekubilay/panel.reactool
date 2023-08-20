import random

from django.db import models
from projects.models import Project
from django_resized import ResizedImageField
from reactool.settings import AWS_S3_CUSTOM_DOMAIN


def makeDynamicDirectProjectPath(instance, filename):
  return f"{instance.project.path}/images/general-plans/{filename}"


def makeDynamicImagePath(instance, filename):
  return f"{instance.plan_content.project.path}/images/plans/{filename}"


def makeDynamicBuildingVrDirectionImagePath(instance, filename):
  return f"{instance.building_vr_direction.building_vr.project.path}/images/building-vr-image/{filename}"


def makeDynamicRoomVrImagePath(instance, filename):
  return f"{instance.project.path}/images/room-vr/{filename}"


def makeDynamicRoomVrVirtualImagePath(instance, filename):
  return f"{instance.room_vr.project.path}/images/room-vr/{filename}"


def makeDynamicTypeImagePath(instance, filename):
  return f"{instance.plan.project.path}/images/plans/type/{filename}"


def makeDynamicVistaCompassImagePath(instance, filename):
  return f"{instance.project.path}/images/vistas/{filename}"


def makeDynamicRoomMadoriImagePath(instance, filename):
  return f"{instance.building_floor.building.project.path}/images/building/room/madori/{filename}"


def makeDynamicVistaImagePath(instance, filename):
  return f"{instance.vista_simulator.project.path}/images/vistas/{filename}"


def makeDynamicVistaThumbnailImagePath(instance, filename):
  return f"{instance.vista_simulator.project.path}/images/vistas/thumbnails/{filename}"


def makeDynamicMapCategoryImagePath(instance, filename):
  return f"{instance.project.path}/images/map-category-pins/{filename}"


def makeDynamicCoordImagePath(instance, filename):
  return f"{instance.map_place.project.path}/images/coords/{filename}"


def makeDynamicPdfFilePath(instance, filename):
  return f"{instance.project.path}/pdf/{filename}"


def makeDynamicLinkImagePath(instance, filename):
  return f"{instance.project.path}/images/links/{filename}"


def makeDynamicGalleryImagePath(instance, filename):
  return f"{instance.project.path}/images/gallery/{filename}"


def makeDynamicSlideshowImagePath(instance, filename):
  return f"{instance.project.path}/images/slideshows/{filename}"


def makeDynamicColorSimImagePath(instance, filename):
  return f"{instance.color_simulator_room_part.color_simulator_room.project.path}/images/room-simulator/{filename}"


def makeDynamicBaseSimImagePath(instance, filename):
  return f"{instance.project.path}/images/room-simulator/{filename}"


class PlanField(models.Model):
  project = models.ForeignKey(Project, null=True, on_delete=models.CASCADE, related_name="plan_fields")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=20, null=True, blank=True)
  type = models.CharField(max_length=20, null=True, blank=True)
  class_name = models.CharField(max_length=40, null=True, blank=True)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanField.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class PlanFieldOption(models.Model):
  plan_field = models.ForeignKey(PlanField, null=True, on_delete=models.CASCADE, related_name="plan_field_options")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=20, null=True, blank=True)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanField.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class PlanContent(models.Model):
  project = models.ForeignKey(Project, null=True, on_delete=models.CASCADE, related_name="plan_contents")
  order_id = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __int__(self):
    return self.id

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanContent.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class PlanContext(models.Model):
  plan_field = models.ForeignKey(PlanField, null=True, on_delete=models.CASCADE, related_name="plan_contexts")
  plan_content = models.ForeignKey(PlanContent, null=True, on_delete=models.CASCADE, related_name="plan_contexts")
  order_id = models.IntegerField(null=True, blank=False)
  ppm = models.CharField(max_length=8, null=True, blank=True)
  field = models.CharField(max_length=50, null=True, blank=True)
  value = models.CharField(max_length=255, null=True, blank=True)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicImagePath)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanContext.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class PlanMenu(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="plan_menus")
  order_id = models.IntegerField(null=True, blank=False)
  menu = models.CharField(max_length=10, null=True, blank=True)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.menu

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanMenu.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class GeneralPlan(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="general_plans")
  kind = models.CharField(max_length=20, null=False, blank=False)
  image = models.FileField(null=True, blank=False, upload_to=makeDynamicDirectProjectPath)
  html_code = models.TextField(null=True, blank=True)
  # thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
  #                               upload_to=makeDynamicDirectProjectPath)
  order_id = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.kind

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not GeneralPlan.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class GeneralPlanSetting(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="general_plan_settings")
  position = models.IntegerField(null=True, default=1)

  def __str__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not GeneralPlanSetting.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class ColorSimulatorRoom(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="color_simulator_rooms")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)
  option_context = models.CharField(max_length=255, null=True, blank=True)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicBaseSimImagePath, default=None)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False, default=None,
                                upload_to=makeDynamicBaseSimImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not ColorSimulatorRoom.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class ColorSimulatorRoomPart(models.Model):
  color_simulator_room = models.ForeignKey(ColorSimulatorRoom, on_delete=models.CASCADE,
                                           related_name="room_parts")
  column_count = models.IntegerField(null=True, blank=True)
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.color_simulator_room.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not ColorSimulatorRoomPart.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class ColorSimulatorRoomPartItem(models.Model):
  color_simulator_room_part = models.ForeignKey(ColorSimulatorRoomPart, null=True,
                                                on_delete=models.CASCADE,
                                                related_name="room_part_items")
  order_id = models.IntegerField(null=True, blank=False)
  option = models.BooleanField(default=False, null=True, blank=False)
  model_room = models.BooleanField(default=False, null=True, blank=False)
  color = models.CharField(max_length=255, null=True, blank=True)
  part_image = models.ImageField(null=True, blank=False, upload_to=makeDynamicColorSimImagePath)
  part_thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                     upload_to=makeDynamicColorSimImagePath)
  color_image = models.ImageField(null=True, blank=False, upload_to=makeDynamicColorSimImagePath)
  color_thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                      upload_to=makeDynamicColorSimImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.color_simulator_room_part.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not ColorSimulatorRoomPartItem.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class VistaSimulator(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="vista_simulator")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicVistaCompassImagePath)
  compass_start = models.CharField(max_length=3, null=True, blank=False)
  compass_top = models.IntegerField(null=True, blank=False, default=0)
  compass_left = models.IntegerField(null=True, blank=False, default=0)

  def __str__(self):
    return self.project.name + "の眺望設定"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not VistaSimulator.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class VistaSimulatorContent(models.Model):
  vista_simulator = models.ForeignKey(VistaSimulator, on_delete=models.CASCADE, related_name="vista_simulator_contents")
  time = models.CharField(max_length=5, null=True, blank=False)
  repeat = models.BooleanField(default=True)
  is_bg = models.BooleanField(default=False)
  floor_num = models.CharField(max_length=2, null=True, blank=False)
  plan_type = models.CharField(max_length=5, null=True, blank=True)
  compass_start = models.CharField(max_length=3, null=True, blank=False)
  compass_top = models.IntegerField(null=True, blank=False, default=0)
  compass_left = models.IntegerField(null=True, blank=False, default=0)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicVistaImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicVistaThumbnailImagePath)

  def __str__(self):
    return self.floor_num + "F"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not VistaSimulatorContent.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Building(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="building")
  order_id = models.IntegerField(null=True, blank=False)
  management_fee = models.CharField(max_length=14, null=True, blank=False, )
  fixing_fee = models.CharField(max_length=14, null=True, blank=False, )

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Building.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingParkingFee(models.Model):
  building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="parking_fees")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)
  price = models.CharField(max_length=14, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.building.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingParkingFee.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class LoanSetting(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="loan_settings")
  price = models.CharField(max_length=255, null=True, default=10)
  interest_rate = models.CharField(max_length=255, null=True, default=10)
  interest_rate_max = models.CharField(max_length=255, null=True, default=10)
  deposit = models.CharField(max_length=255, null=True, default=10)
  deposit_max = models.CharField(max_length=255, null=True, default=10)
  deposit_step = models.CharField(max_length=255, null=True, default=10)

  def __str__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not LoanSetting.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingBankType(models.Model):
  building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="bank_types")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False, )
  rate = models.CharField(max_length=14, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.building.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingBankType.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingFloor(models.Model):
  building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="floors")
  order_id = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingFloor.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingFloorRoom(models.Model):
  building_floor = models.ForeignKey(BuildingFloor, on_delete=models.CASCADE, related_name="rooms")
  order_id = models.IntegerField(null=True, blank=False)
  compass = models.CharField(max_length=40, null=True, blank=False)
  number = models.CharField(blank=True, null=True, max_length=10)
  status = models.CharField(max_length=40, null=True, blank=False)
  menu = models.CharField(max_length=10, null=True, blank=False)
  type = models.CharField(max_length=20, null=True, blank=False)
  plan = models.CharField(max_length=50, null=True, blank=True)
  m2 = models.CharField(max_length=50, null=True, blank=True)
  price = models.CharField(max_length=50, null=True, blank=True)
  management_fee = models.CharField(max_length=50, null=True, blank=True)
  fixing_fee = models.CharField(max_length=50, null=True, blank=True)
  sub = models.BooleanField(default=False)
  sub_content = models.CharField(max_length=50, null=True, blank=True)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicRoomMadoriImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicRoomMadoriImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    if self.number is not None:
      return self.number + ""
    else:
      return "no_room_context"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingFloorRoom.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingVr(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="building_vr")

  def __str__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingVr.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingVrDirection(models.Model):
  building_vr = models.ForeignKey(BuildingVr, on_delete=models.CASCADE, related_name="building_vr_directions")
  order_id = models.IntegerField(null=True)
  name = models.CharField(max_length=50, null=True, blank=True)

  class Meta:
    ordering = ["name"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingVrDirection.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class BuildingVrDirectionImage(models.Model):
  building_vr_direction = models.ForeignKey(BuildingVrDirection, on_delete=models.CASCADE,
                                            related_name="building_vr_direction_images")
  name = models.CharField(max_length=50, null=True, blank=True)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicBuildingVrDirectionImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicBuildingVrDirectionImagePath)

  class Meta:
    ordering = ["name"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingVrDirectionImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVrVendor(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="room_vr_vendors")
  order_id = models.IntegerField(null=True)
  title = models.CharField(max_length=255, null=True, blank=False)
  sub_title = models.CharField(max_length=255, null=True, blank=True)
  url = models.CharField(max_length=255, null=True, blank=False)
  image = ResizedImageField(size=[400, 400], null=True, blank=True,
                            upload_to=makeDynamicRoomVrImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.title

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVrVendor.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVr(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="room_vr")
  plan_type = models.CharField(max_length=10, null=True, blank=False)
  image = ResizedImageField(size=[400, 400], null=True, blank=False,
                            upload_to=makeDynamicRoomVrImagePath)

  class Meta:
    ordering = ["plan_type"]

  def __str__(self):
    return self.plan_type

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVr.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVrFloor(models.Model):
  room_vr = models.ForeignKey(RoomVr, on_delete=models.CASCADE, related_name="floors")
  floor_num = models.IntegerField(null=True, blank=False)
  base = models.BooleanField(default=True)
  room = models.CharField(null=True, max_length=255, blank=False)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicRoomVrVirtualImagePath)
  vr_start = models.IntegerField(null=True, blank=False)
  compass_diff = models.IntegerField(null=True, blank=False)
  compass_start = models.IntegerField(null=True, blank=False)
  compass_top = models.IntegerField(null=True, blank=False)
  compass_left = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["floor_num"]

  def __str__(self):
    return self.room_vr.plan_type + " - " + str(self.floor_num)

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVrFloor.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVrNextRoom(models.Model):
  room_vr_floor = models.ForeignKey(RoomVrFloor, on_delete=models.CASCADE, related_name="next_rooms")
  next_room = models.IntegerField(null=True, blank=False)
  button_x = models.CharField(max_length=255, null=True, blank=False)
  button_y = models.CharField(max_length=255, null=True, blank=False)

  def __str__(self):
    return "next/ " + self.room_vr_floor.room_vr.plan_type + " - " + str(self.room_vr_floor.room_vr)

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVrNextRoom.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapSetting(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="map_settings")
  all = models.BooleanField(default=True)
  administrative = models.BooleanField(default=True)
  poi = models.BooleanField(default=True)
  road = models.BooleanField(default=True)
  water = models.BooleanField(default=True)
  line = models.BooleanField(default=True)
  station = models.BooleanField(default=True)

  def __int__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapSetting.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapCategory(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="map_categories")
  order_id = models.IntegerField(null=True)
  empty = models.BooleanField(default=False, null=True)
  color = models.CharField(max_length=255, null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)
  pin = models.FileField(null=True, blank=False, upload_to=makeDynamicMapCategoryImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapCategory.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapPlace(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="map_places")
  map_category = models.ForeignKey(MapCategory, null=True, on_delete=models.CASCADE, related_name="map_places")
  order_id = models.IntegerField(null=True, blank=False)
  show_directions = models.BooleanField(default=False)
  type = models.CharField(max_length=50, null=True)
  link = models.URLField(null=True, blank=True)
  place = models.CharField(max_length=255, null=True)
  address = models.CharField(max_length=255, null=True)
  context = models.CharField(max_length=255, null=True, blank=True)
  lat = models.CharField(null=True, max_length=50)
  lng = models.CharField(null=True, max_length=50)
  pin = models.FileField(null=True, blank=False, upload_to=makeDynamicMapCategoryImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.place

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapPlace.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapPlaceImage(models.Model):
  map_place = models.ForeignKey(MapPlace, on_delete=models.CASCADE, related_name="map_place_images")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicCoordImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicCoordImagePath)

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapPlaceImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class DocumentFolder(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="document_folders")
  order_id = models.IntegerField(null=True)
  name = models.CharField(max_length=255, null=True, blank=False)

  def __str__(self):
    return self.name

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not DocumentFolder.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Document(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="documents")
  document_folder = models.ForeignKey(DocumentFolder, null=True, on_delete=models.SET_NULL, related_name="documents")
  order_id = models.IntegerField(null=True)
  folder = models.CharField(max_length=255, null=True, blank=False)
  file = models.FileField(null=True, blank=False, upload_to=makeDynamicPdfFilePath)
  type = models.CharField(max_length=10, null=True)
  size = models.IntegerField(null=True)
  name = models.CharField(max_length=255, null=True, blank=False)

  def __str__(self):
    return self.name

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Document.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Link(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="links")
  order_id = models.IntegerField(null=True)
  name = models.CharField(max_length=255, null=True, blank=False)
  link = models.CharField(null=True, blank=False, max_length=255)
  image = ResizedImageField(size=[400, 400], null=True, blank=False,
                            upload_to=makeDynamicLinkImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def image_url(self):
    if self.image:
      return "https://" + AWS_S3_CUSTOM_DOMAIN + self.image.url
    else:
      return None

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Link.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Gallery(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="gallery")
  order_id = models.IntegerField(null=True)
  type = models.CharField(max_length=10, null=True, blank=False)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicGalleryImagePath)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                upload_to=makeDynamicGalleryImagePath)

  class Meta:
    ordering = ["order_id"]

  def thumbnail_url(self):
    if self.thumbnail:
      return "https://" + AWS_S3_CUSTOM_DOMAIN + self.thumbnail.url
    else:
      return None

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Gallery.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Slideshow(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="slideshow")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicSlideshowImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicSlideshowImagePath)

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Gallery.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
