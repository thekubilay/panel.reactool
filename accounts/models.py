import random

from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from companies.models import Company


class CustomUser(AbstractUser):
  company = models.ForeignKey(Company, null=True, on_delete=models.CASCADE, related_name="company")
  username = models.CharField(unique=True, max_length=20, null=False, blank=False)
  email = models.EmailField(unique=True, max_length=255)
  is_company_manager = models.BooleanField(default=False)

  def __str__(self):
    return self.username

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not CustomUser.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class UserProfile(models.Model):
  user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name="profile")
  avatar = models.ImageField(null=True, blank=True, upload_to="avatars")

  def __int__(self):
    return self.user

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not UserProfile.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
