import random
from django.db import models


class Tutorial(models.Model):
  type = models.CharField(max_length=25, null=True, blank=False)
  order_id = models.IntegerField(null=True)
  title = models.CharField(max_length=100, null=True, blank=False)
  sub_title = models.CharField(max_length=200, null=True, blank=False)
  content = models.TextField(null=True, blank=True)
  video = models.FileField(null=True, blank=True, upload_to="tutorials/videos")
  video_thumbnail = models.ImageField(null=True, blank=True, upload_to="tutorials/videos")
  size = models.CharField(max_length=10, null=True, blank=False)
  pdf = models.FileField(null=True, blank=False, upload_to="tutorials/pdf")
  pdf_size = models.CharField(max_length=10, null=True, blank=False)
  active = models.BooleanField(default=True)

  def __str__(self):
    return self.title

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Tutorial.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class TutorialImage(models.Model):
  tutorials = models.ForeignKey(Tutorial, null=True, on_delete=models.CASCADE, related_name="tutorial_images")
  order_id = models.IntegerField(null=True)
  title = models.CharField(max_length=100, null=True, blank=False)
  sub_title = models.CharField(max_length=200, null=True, blank=False)
  content = models.TextField(null=True, blank=True)
  image = models.ImageField(null=True, blank=True, upload_to="tutorials/images")

  def __str__(self):
    return self.title

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not TutorialImage.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
