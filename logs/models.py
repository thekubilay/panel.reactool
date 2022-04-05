import random

from django.db import models


class Error(models.Model):
  method = models.CharField(max_length=10, null=True, blank=False)
  endpoint = models.CharField(max_length=100, null=True, blank=False)
  status = models.IntegerField(null=True, blank=False)
  problem = models.CharField(max_length=255, null=True, blank=False)
  created_at = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ["-created_at"]

  def __str__(self):
    return self.method + " / " + self.endpoint

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Error.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)


class Action(models.Model):
  method = models.CharField(max_length=10, null=True, blank=False)
  who = models.CharField(max_length=100, null=True, blank=False)
  action = models.CharField(max_length=100, null=True, blank=False)
  created_at = models.DateTimeField(auto_now_add=True)

  class Meta:
    ordering = ["-created_at"]

  def __str__(self):
    return self.who + "が" + self.method + "requestをしました。"

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Error.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
