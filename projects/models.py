import random
import string

from django.utils import timezone
from django.db import models
from accounts.models import CustomUser
from companies.models import Company
from salons.models import Salon
from permissions.models import User as UserPermission
from routes.models import Route as MainRoute


def makeDynamicPinImagePath(instance, filename):
  return f"{instance.path}/images/pins/{filename}"


def makeDynamicLogoImagePath(instance, filename):
  return f"{instance.path}/images/logo/{filename}"


class Project(models.Model):
  salon = models.ForeignKey(Salon, on_delete=models.SET_NULL, related_name="projects", null=True)
  company = models.ForeignKey(Company, on_delete=models.SET_NULL, related_name="projects", null=True)
  salon_view = models.BooleanField(default=True)
  users = models.ManyToManyField(CustomUser, through='Role', related_name=u'project_roles')
  order_id = models.IntegerField(null=True, blank=False)
  archive = models.BooleanField(default=False)
  legacy = models.BooleanField(default=False)
  token_on = models.BooleanField(default=False)
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


class PRoute(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="routes")
  route = models.ForeignKey(MainRoute, null=True, on_delete=models.CASCADE)
  order_id = models.IntegerField(null=True, blank=True)
  component = models.CharField(max_length=20, null=True, blank=False)
  path = models.CharField(max_length=20, null=True, blank=False)
  name = models.CharField(max_length=20, null=True, blank=False)
  panel_name = models.CharField(max_length=30, null=True, blank=False)
  title = models.CharField(max_length=20, null=True, blank=False)
  active = models.BooleanField(default=False)

  def __str__(self):
    return self.project.name + " // " + self.component

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not PRoute.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Calendar(models.Model):
  project = models.OneToOneField(Project, null=True, blank=False, on_delete=models.CASCADE, related_name="calendar")
  holiday_codes = models.CharField(max_length=30, null=True, blank=True)
  view = models.CharField(max_length=10, null=True, blank=False)

  def __str__(self):
    return self.project.name + "のカレンダー"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Calendar.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class CalendarEvent(models.Model):
  calendar = models.ForeignKey(Calendar, null=True, blank=False, on_delete=models.CASCADE, related_name="events")
  title = models.CharField(max_length=255, null=True, blank=False)
  allDay = models.BooleanField(default=False)
  url = models.URLField(null=True, blank=True)
  description = models.TextField(null=True, blank=True)
  start = models.DateTimeField(null=True)
  end = models.DateTimeField(null=True)
  display = models.CharField(max_length=30, null=True, blank=False)
  color = models.CharField(max_length=30, default="#4834d4", null=True, blank=False)
  is_holiday = models.BooleanField(default=False)

  def __str__(self):
    return self.calendar.project.name + "のイベント"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not CalendarEvent.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Role(models.Model):
  user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  read = models.BooleanField(default=True)
  edit = models.BooleanField(default=True)
  # permission = models.ForeignKey(UserPermission, null=True, on_delete=models.CASCADE, related_name="user_permissions")

  # def __str__(self):
  #   return self.user

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Role.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Permission(models.Model):
  project = models.ForeignKey(Project, null=True, blank=False, on_delete=models.CASCADE, related_name="permissions")
  name = models.CharField(null=True, blank=False, max_length=255)
  code_name = models.CharField(null=True, blank=False, max_length=255)
  active = models.BooleanField(default=False)

  def __str__(self):
    return self.project.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Permission.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class ApiToken(models.Model):
  project = models.ForeignKey(Project, null=True, blank=False, on_delete=models.CASCADE, related_name="api_tokens")
  token_id = models.CharField(max_length=255, null=True, blank=False)
  name = models.CharField(max_length=255, null=True, blank=False)
  permanent = models.BooleanField(default=False)
  start_date = models.DateField(null=True, blank=False)
  end_date = models.DateField(null=True, blank=False)

  def save(self, *args, **kwargs):
    new_id = random.randint(10000000, 99999999)
    token = ''.join(
      random.SystemRandom().choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(60))
    if not ApiToken.objects.filter(id=self.id).exists() and not ApiToken.objects.filter(
      token_id=self.token_id).exists():
      self.id = new_id
      self.token_id = token
    super().save(*args, **kwargs)
