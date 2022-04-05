from django.db.models.signals import post_save, pre_save, pre_delete
from django.dispatch import receiver
from projects.models import Project, Permission
from permissions.models import Project as ProjectPermission


@receiver(post_save, sender=ProjectPermission)
def createPermissionToEveryProject(sender, instance, created, **kwargs):
  projects = Project.objects.all()
  if created:
    for project in projects:
      exits = Permission.objects.filter(project=project, code_name__exact=instance.code_name).exists()
      if exits is False:
        Permission.objects.create(name=instance.name,
                                  code_name=instance.code_name,
                                  active=instance.active,
                                  project=project)


# @receiver(pre_save, sender=ProjectPermission)
# def savePermissionToEveryProject(sender, instance, **kwargs):
#   projects = Project.objects.all()
#   for project in projects:
#     if Permission.objects.filter(project=project, code_name__exact=instance.code_name).exists():
#       permission = Permission.objects.get(project=project, code_name__exact=instance.code_name)
#       permission.active = instance.active
#       permission.save()


@receiver(pre_delete, sender=ProjectPermission)
def deletePermissionToEveryProject(sender, instance, **kwargs):
  projects = Project.objects.all()
  for project in projects:
    try:
      permission = Permission.objects.get(project=project, code_name__exact=instance.code_name)
      permission.delete()
    except Permission.DoesNotExist:
      pass
