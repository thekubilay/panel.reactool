from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from sumaipad.models import (PlanTypeImage,
                             RoomSimulator, RoomSimulatorContent, RoomSimulatorImage, RoomSimulatorColorImage,
                             RoomSimulatorBaseImage)


@receiver(post_save, sender=RoomSimulator)
def createSimulatorBaseImage(sender, instance, created, **kwargs):
  if created:
    RoomSimulatorBaseImage.objects.create(room_simulator=instance)


@receiver(post_save, sender=RoomSimulatorContent)
def createSimulatorImage(sender, instance, created, **kwargs):
  if created:
    RoomSimulatorImage.objects.create(room_simulator_content=instance)
    RoomSimulatorColorImage.objects.create(room_simulator_content=instance)


# remove before image
@receiver(pre_save, sender=PlanTypeImage)
def updatePlanTypeImage(sender, instance, *args, **kwargs):
  if instance.pk:
    is_exist = PlanTypeImage.objects.filter(pk=instance.pk).exists()
    if is_exist:
      existing_image = PlanTypeImage.objects.get(pk=instance.pk)
      if instance.image and existing_image.image != instance.image:
        existing_image.image.delete(False)


# remove before image
@receiver(pre_save, sender=RoomSimulatorImage)
def updateSimulatorImage(sender, instance, *args, **kwargs):
  if instance.pk:
    is_exist = RoomSimulatorImage.objects.filter(pk=instance.pk).exists()
    if is_exist:
      existing_image = RoomSimulatorImage.objects.get(pk=instance.pk)
      if instance.image and existing_image.image != instance.image:
        existing_image.image.delete(False)


# remove before image
@receiver(pre_save, sender=RoomSimulatorColorImage)
def updateSimulatorColorImage(sender, instance, *args, **kwargs):
  if instance.pk:
    is_exist = RoomSimulatorColorImage.objects.filter(pk=instance.pk).exists()
    if is_exist:
      existing_image = RoomSimulatorColorImage.objects.get(pk=instance.pk)
      if instance.image and existing_image.image != instance.image:
        existing_image.image.delete(False)
