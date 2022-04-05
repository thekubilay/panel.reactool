from django.db.models.signals import post_save
from django.dispatch import receiver
from projects.models import (Project, Permission, PRoute, Calendar)
from routes.models import Route as MainRoute
from sumaipad.models import (Building, VistaSimulator, MapSetting, BuildingVr, BuildingVrDirection)


@receiver(post_save, sender=Project)
def createRoute(sender, instance, created, **kwargs):
  if created:
    routes = MainRoute.objects.all()
    for route in routes:
      PRoute.objects.create(order_id=route.order_id,
                            component=route.component,
                            path=route.path,
                            name=route.name,
                            panel_name=route.panel_name,
                            title=route.title,
                            project=instance)


@receiver(post_save, sender=Project)
def createProjectPermission(sender, instance, created, **kwargs):
  if created:
    Permission.objects.create(project=instance)


@receiver(post_save, sender=Project)
def createProjectUnit(sender, instance, created, **kwargs):
  if created:
    Building.objects.create(project=instance)


@receiver(post_save, sender=Project)
def createBuildingVr(sender, instance, created, **kwargs):
  if created:
    BuildingVr.objects.create(project=instance)


@receiver(post_save, sender=BuildingVr)
def createBuildingVrDefaultDirection(sender, instance, created, **kwargs):
  if created:
    for i in range(2):
      BuildingVrDirection.objects.create(building_vr=instance, name=f"方向{i + 1}")


@receiver(post_save, sender=Project)
def createVistaSimulator(sender, instance, created, **kwargs):
  if created:
    VistaSimulator.objects.create(project=instance)


@receiver(post_save, sender=Project)
def createMapSetting(sender, instance, created, **kwargs):
  if created:
    MapSetting.objects.create(project=instance)\


@receiver(post_save, sender=Project)
def createCalendar(sender, instance, created, **kwargs):
  if created:
    Calendar.objects.create(project=instance)
