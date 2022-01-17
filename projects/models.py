import random

from django.db import models
from accounts.models import CustomUser, Company
from salons.models import Salon
from permissions.models import UserPermission


def makeDynamicPinImagePath(instance, filename):
  return f"{instance.path}/images/pins/{filename}"


def makeDynamicLogoImagePath(instance, filename):
  return f"{instance.path}/images/logo/{filename}"


class Project(models.Model):
  salon = models.ForeignKey(Salon, on_delete=models.SET_NULL, related_name="projects", null=True)
  company = models.ForeignKey(Company, on_delete=models.SET_NULL, related_name="projects", null=True)
  salon_view = models.BooleanField(default=True)
  user = models.ManyToManyField(CustomUser, through='ProjectRole')
  order_id = models.IntegerField(null=True, blank=False)
  archive = models.BooleanField(default=False)
  name = models.CharField(null=False, blank=False, max_length=255)
  path = models.SlugField(max_length=255)
  context = models.TextField(null=True, blank=True)
  address = models.CharField(max_length=255, null=True, blank=True)
  lat = models.CharField(max_length=55, null=True, blank=True)
  lng = models.CharField(max_length=55, null=True, blank=True)
  pin = models.FileField(null=True, blank=False, upload_to=makeDynamicPinImagePath)
  pin_width = models.CharField(null=True, blank=False, max_length=255, default="25")
  pin_height = models.CharField(null=True, blank=False, max_length=255, default="25")
  logo = models.FileField(null=True, blank=False, upload_to=makeDynamicLogoImagePath)
  logo_width = models.CharField(null=True, blank=False, max_length=255, default="200px")
  logo_height = models.CharField(null=True, blank=False, max_length=255, default="auto")
  logo_place = models.IntegerField(default=1)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ["order_id"]

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Project.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class ProjectRole(models.Model):
  user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="project_roles")
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="project_roles")
  permission = models.ForeignKey(UserPermission, on_delete=models.CASCADE, related_name="user_permissions")

  def __str__(self):
    return self.user

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not ProjectRole.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
