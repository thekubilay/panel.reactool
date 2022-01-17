import random

from django.db import models
from projects.models import Project
from django_resized import ResizedImageField


def makeDynamicImagePath(instance, filename):
  return f"{instance.project.path}/images/plans/{filename}"


def makeDynamicRoomVrImagePath(instance, filename):
  return f"{instance.room_vr.project.path}/images/room-vr/{filename}"


def makeDynamicTypeImagePath(instance, filename):
  return f"{instance.plan.project.path}/images/plans/type/{filename}"


def makeDynamicVistaCompassImagePath(instance, filename):
  return f"{instance.project.path}/images/vistas/{filename}"


def makeDynamicRoomMadoriImagePath(instance, filename):
  return f"{instance.floor.building.project.path}/images/building/room/madori/{filename}"


def makeDynamicVistaImagePath(instance, filename):
  return f"{instance.vista_simulator.project.path}/images/vistas/{filename}"


def makeDynamicCoordImagePath(instance, filename):
  return f"{instance.coord.project.path}/images/coords/{filename}"


def makeDynamicMapCategoryImagePath(instance, filename):
  return f"{instance.project.path}/images/map-category-pins/{filename}"


def makeDynamicPdfFilePath(instance, filename):
  return f"{instance.project.path}/pdf/{filename}"


def makeDynamicLinkImagePath(instance, filename):
  return f"{instance.project.path}/images/links/{filename}"


def makeDynamicGalleryImagePath(instance, filename):
  return f"{instance.project.path}/images/gallery/{filename}"


def makeDynamicSlideshowImagePath(instance, filename):
  return f"{instance.project.path}/images/slideshows/{filename}"


def makeDynamicColorSimImagePath(instance, filename):
  return f"{instance.room_simulator_content.room_simulator_content_title.room_simulator.project.path}/images/room-simulator/{filename}"


def makeDynamicBaseSimImagePath(instance, filename):
  return f"{instance.room_simulator.project.path}/images/room-simulator/{filename}"


class Route(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="routes")
  order_id = models.IntegerField(null=True, blank=True)
  component = models.CharField(max_length=20, null=True, blank=False)
  path = models.CharField(max_length=20, null=True, blank=False)
  name = models.CharField(max_length=20, null=True, blank=False)
  title = models.CharField(max_length=20, null=True, blank=False)
  active = models.BooleanField(default=False)

  def __str__(self):
    return self.project.name

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Route.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Plan(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="plans")
  menu = models.CharField(max_length=10, null=True, blank=True)
  type = models.CharField(max_length=20, null=True, blank=True)
  plan = models.CharField(max_length=50, null=True, blank=True)
  m2 = models.CharField(max_length=50, null=True, blank=True)
  price = models.CharField(max_length=50, null=True, blank=True)
  balcony = models.CharField(max_length=255, null=True, blank=True)
  roof_balcony = models.CharField(max_length=255, null=True, blank=True)
  service_balcony = models.CharField(max_length=255, null=True, blank=True)
  personal_use = models.CharField(max_length=255, null=True, blank=True)
  terrace = models.CharField(max_length=255, null=True, blank=True)
  outdoor_unit = models.CharField(max_length=255, null=True, blank=True)
  alcove = models.CharField(max_length=255, null=True, blank=True)

  def __str__(self):
    return self.menu

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Plan.objects.filter(id=self.id).exists():
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


class PlanTypeImage(models.Model):
  plan = models.OneToOneField(Plan, on_delete=models.CASCADE, related_name="type_image")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicTypeImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicTypeImagePath)

  def __str__(self):
    return self.plan.type

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanTypeImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class PlanImage(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="plan_images")
  plan = models.CharField(max_length=20, null=False, blank=False)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicImagePath)
  order_id = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PlanImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulator(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="room_simulator")
  order_id = models.IntegerField(null=True, blank=False)
  color = models.CharField(max_length=10, null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulator.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulatorBaseImage(models.Model):
  room_simulator = models.OneToOneField(RoomSimulator, on_delete=models.CASCADE, related_name="room_sim_base_image")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicBaseSimImagePath, default=None)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False, default=None,
                                upload_to=makeDynamicBaseSimImagePath)

  def __str__(self):
    return self.room_simulator.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulatorBaseImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulatorContentTitle(models.Model):
  room_simulator = models.ForeignKey(RoomSimulator, on_delete=models.CASCADE, related_name="room_content_titles")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.room_simulator.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulatorContentTitle.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulatorContent(models.Model):
  room_simulator_content_title = models.ForeignKey(RoomSimulatorContentTitle, null=True, on_delete=models.CASCADE,
                                                   related_name="room_contents")
  order_id = models.IntegerField(null=True, blank=False)
  option = models.BooleanField(default=False, null=True, blank=False)
  model_room = models.BooleanField(default=False, null=True, blank=False)
  where_is = models.CharField(max_length=255, null=True, blank=False)
  color_en = models.CharField(max_length=255, null=True, blank=False)
  color_jp = models.CharField(max_length=255, null=True, blank=True)
  color_code = models.CharField(max_length=255, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.room_simulator_content_title.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulatorContent.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulatorImage(models.Model):
  room_simulator_content = models.OneToOneField(RoomSimulatorContent, on_delete=models.CASCADE,
                                                related_name="room_sim_image")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicColorSimImagePath)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                upload_to=makeDynamicColorSimImagePath)

  def __str__(self):
    return self.room_simulator_content.where_is

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulatorImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomSimulatorColorImage(models.Model):
  room_simulator_content = models.OneToOneField(RoomSimulatorContent, on_delete=models.CASCADE,
                                                related_name="room_sim_color_image")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicColorSimImagePath)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                upload_to=makeDynamicColorSimImagePath)

  def __str__(self):
    return self.room_simulator_content.where_is

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomSimulatorColorImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class VistaSimulator(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="vista_simulator")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicVistaCompassImagePath)
  repeat = models.BooleanField(default=True)
  compass_start_degree = models.CharField(max_length=3, null=True, blank=False)
  start_position = models.CharField(max_length=5, null=True, blank=False)
  pin_top_px = models.IntegerField(null=True, blank=False, default=0)
  pin_left_px = models.IntegerField(null=True, blank=False, default=0)

  def __str__(self):
    return self.compass_start_degree

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not VistaSimulator.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class VistaSimulatorContent(models.Model):
  vista_simulator = models.ForeignKey(VistaSimulator, on_delete=models.CASCADE, related_name="vista_simulator_contents")
  type = models.CharField(max_length=5, null=True, blank=False)
  panorama_type = models.BooleanField(default=True)
  floor = models.CharField(max_length=2, null=True, blank=False)
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicVistaImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicVistaImagePath)

  class Meta:
    ordering = ["floor"]

  def __str__(self):
    return self.floor

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


class BuildingBankType(models.Model):
  building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="bank_types")
  name = models.CharField(max_length=255, null=True, blank=False, )
  rate = models.CharField(max_length=14, null=True, blank=False)

  def __str__(self):
    return self.building.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not BuildingBankType.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Floor(models.Model):
  building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="floors")
  order_id = models.IntegerField(null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Floor.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Room(models.Model):
  floor = models.ForeignKey(Floor, on_delete=models.CASCADE, related_name="rooms")
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
  madori_image = models.ImageField(null=True, blank=False, upload_to=makeDynamicRoomMadoriImagePath)
  madori_thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                       upload_to=makeDynamicRoomMadoriImagePath)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.number

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Room.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVr(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="room_vr")
  type = models.CharField(max_length=10, null=True, blank=False)

  class Meta:
    ordering = ["type"]

  def __str__(self):
    return self.type

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVr.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class RoomVrFloor(models.Model):
  room_vr = models.ForeignKey(RoomVr, on_delete=models.CASCADE, related_name="floors")
  floor = models.IntegerField(null=True, blank=False)
  base = models.BooleanField(null=False, default=False)
  place = models.CharField(null=True, max_length=255, blank=False)
  vr_image = models.ImageField(null=True, blank=False, upload_to=makeDynamicRoomVrImagePath)
  madori_image = ResizedImageField(size=[400, 400], null=True, blank=False,
                                   upload_to=makeDynamicRoomVrImagePath)
  vr_compass_diff = models.CharField(max_length=4, null=True, blank=False)
  vr_start_degree = models.CharField(max_length=4, null=True, blank=False)
  compass_start_degree = models.CharField(max_length=4, null=True, blank=False)
  compass_top_position = models.CharField(max_length=4, null=True, blank=False)
  compass_left_position = models.CharField(max_length=4, null=True, blank=False)

  class Meta:
    ordering = ["floor"]

  def __str__(self):
    return self.floor

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not RoomVrFloor.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapSetting(models.Model):
  project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name="map_settings")
  poi = models.BooleanField(default=True)

  def __int__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapSetting.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Coord(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="coords")
  type = models.CharField(max_length=50, null=True)
  place = models.CharField(max_length=255, null=True)
  address = models.CharField(max_length=255, null=True)
  lat = models.CharField(null=True, max_length=50)
  lng = models.CharField(null=True, max_length=50)

  def __int__(self):
    return self.type

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Coord.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class CoordImage(models.Model):
  coord = models.ForeignKey(Coord, on_delete=models.CASCADE, related_name="coord_images")
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicCoordImagePath)
  thumbnail = ResizedImageField(size=[400, 400], null=True, blank=False,
                                upload_to=makeDynamicCoordImagePath)

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not CoordImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapCategory(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="map_categories")
  order_id = models.IntegerField(null=True)
  color = models.CharField(max_length=255, null=True, blank=False)
  category = models.CharField(max_length=255, null=True, blank=False)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapCategory.objects.filter(id=self.id).exists():
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
