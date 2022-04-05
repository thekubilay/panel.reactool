from django.db.models.signals import post_save, pre_save, pre_delete
from django.dispatch import receiver
from routes.models import Route
from projects.models import Project, PRoute as ProjectRoutes


@receiver(post_save, sender=Route)
def createRouteToEveryProject(sender, instance, created, **kwargs):
  projects = Project.objects.all()
  if created:
    for project in projects:
      exits = ProjectRoutes.objects.filter(project=project, route=instance).exists()
      if exits is False:
        ProjectRoutes.objects.create(component=instance.component,
                                     path=instance.path,
                                     name=instance.name,
                                     panel_name=instance.panel_name,
                                     title=instance.title,
                                     active=instance.active,
                                     route=instance,
                                     project=project)


@receiver(pre_save, sender=Route)
def saveRouteToEveryProject(sender, instance, **kwargs):
  projects = Project.objects.all()
  for project in projects:
    if ProjectRoutes.objects.filter(project=project, route=instance).exists():
      route = ProjectRoutes.objects.get(project=project, route=instance)
      route.order_id = instance.order_id
      route.component = instance.component
      route.path = instance.path
      route.name = instance.name
      route.panel_name = instance.panel_name
      route.title = instance.title
      route.active = instance.active
      route.save()


@receiver(pre_delete, sender=Route)
def deleteRouteToEveryProject(sender, instance, **kwargs):
  projects = Project.objects.all()
  for project in projects:
    routes = ProjectRoutes.objects.filter(project=project, route=instance)
    for route in routes:
      route.delete()
