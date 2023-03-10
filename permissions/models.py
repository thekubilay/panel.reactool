import random
from django.db import models
from accounts.models import CustomUser


class Project(models.Model):
  name = models.CharField(max_length=255, null=True, blank=False)
  code_name = models.CharField(max_length=255, null=True, blank=False)
  description = models.CharField(max_length=255, null=True, blank=False)
  active = models.BooleanField(default=False)

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Project.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class User(models.Model):
  name = models.CharField(max_length=255, null=True, blank=False)
  code_name = models.CharField(max_length=255, null=True, blank=False)
  users = models.ManyToManyField(CustomUser, through='UserRole')

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not User.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class UserRole(models.Model):
  user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="roles")
  permission = models.ForeignKey(User, on_delete=models.CASCADE, related_name="permissions")

  def __str__(self):
    return self.user.username

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not UserRole.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
