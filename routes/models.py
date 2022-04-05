import random
from django.db import models


class Route(models.Model):
  order_id = models.IntegerField(null=True, blank=True)
  component = models.CharField(max_length=20, null=True, blank=False)
  path = models.CharField(max_length=20, null=True, blank=False)
  name = models.CharField(max_length=20, null=True, blank=False)
  panel_name = models.CharField(max_length=30, null=True, blank=False)
  title = models.CharField(max_length=20, null=True, blank=False)
  active = models.BooleanField(default=True)

  class Meta:
    ordering = ["order_id"]

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not Route.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
