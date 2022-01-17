import random
from django.db import models
from accounts.models import Company
from django_resized import ResizedImageField


def makeDynamicMapPlaceImagePath(instance, filename):
  return f"salons/images/places/{filename}"


class Salon(models.Model):
  company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="salons")
  order_id = models.IntegerField(null=True, blank=False)
  name = models.CharField(null=True, blank=True, max_length=255)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Salon.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapSetting(models.Model):
  salon = models.OneToOneField(Salon, on_delete=models.CASCADE, related_name="map_settings")
  all = models.BooleanField(default=True)
  administrative = models.BooleanField(default=True)
  poi = models.BooleanField(default=True)
  road = models.BooleanField(default=True)
  water = models.BooleanField(default=True)
  line = models.BooleanField(default=True)
  station = models.BooleanField(default=True)
  pin = models.FileField(null=True, blank=False, upload_to=makeDynamicMapPlaceImagePath)
  pin_width = models.CharField(null=True, blank=False, max_length=255, default="25")
  pin_height = models.CharField(null=True, blank=False, max_length=255, default="25")

  def __str__(self):
    return self.salon.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapSetting.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class MapPlace(models.Model):
  salon = models.ForeignKey(Salon, on_delete=models.CASCADE, related_name="map_places")
  order_id = models.IntegerField(null=True, blank=False)
  show_directions = models.BooleanField(default=False)
  type = models.CharField(max_length=50, null=True)
  place = models.CharField(max_length=255, null=True)
  address = models.CharField(max_length=255, null=True)
  context = models.CharField(max_length=255, null=True, blank=True)
  lat = models.CharField(null=True, max_length=50)
  lng = models.CharField(null=True, max_length=50)
  pin = models.FileField(null=True, blank=False, upload_to=makeDynamicMapPlaceImagePath)

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
  image = models.ImageField(null=True, blank=False, upload_to=makeDynamicMapPlaceImagePath)
  thumbnail = ResizedImageField(size=[200, 200], null=True, blank=False,
                                upload_to=makeDynamicMapPlaceImagePath)

  def __str__(self):
    return self.map_place.place

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not MapPlaceImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
