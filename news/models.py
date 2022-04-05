import random
from django.db import models


class NewsLetter(models.Model):
  type = models.CharField(max_length=20, null=True, blank=False)
  title = models.CharField(max_length=255, null=True, blank=False)
  content = models.TextField(null=True, blank=False)
  seen = models.BooleanField(default=False, )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ["-created_at"]

  def __str__(self):
    return self.type

  def save(self, *args, **kwargs):
    new_id = random.randint(100000000, 999999999)
    if not NewsLetter.objects.filter(id=self.id).exists():
      self.id = new_id
    super().save(*args, **kwargs)
