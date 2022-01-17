from django.db.models.signals import post_save
from django.dispatch import receiver
from projects.models import Project
from routes.models import Route as MainRoute
from sumaipad.models import Route, Building, VistaSimulator, MapSetting


@receiver(post_save, sender=Project)
def createRoute(sender, instance, created, **kwargs):
  if created:
    routes = MainRoute.objects.all()
    for route in routes:
      Route.objects.create(order_id=route.order_id,
                           component=route.component,
                           path=route.path,
                           name=route.name,
                           title=route.title,
                           project=instance)


@receiver(post_save, sender=Project)
def createProjectUnit(sender, instance, created, **kwargs):
  if created:
    Building.objects.create(project=instance)


@receiver(post_save, sender=Project)
def createVistaSimulator(sender, instance, created, **kwargs):
  if created:
    VistaSimulator.objects.create(project=instance)


@receiver(post_save, sender=Project)
def createMapSetting(sender, instance, created, **kwargs):
  if created:
    MapSetting.objects.create(project=instance)
