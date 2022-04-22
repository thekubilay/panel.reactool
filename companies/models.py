import random
from django.db import models


class Company(models.Model):
  name = models.CharField(max_length=40, null=True, blank=False)
  active = models.BooleanField(default=True)

  class Meta:
    verbose_name_plural = "companies"

  def __str__(self):
    return self.name

  def save(self, *args, **kwargs):
    new_id = random.randint(10000000, 99999999)  # 8 num
    if not Company.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)