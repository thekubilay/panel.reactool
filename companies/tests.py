from django.test import TestCase
from projects.models import Project, Calendar
from salons.models import Salon, MapSetting
from sumaipad.models import BuildingVr


def create_salon_map_setting():
  salons = Salon.objects.all()
  for salon in salons:
    if MapSetting.objects.filter(salon=salon).exists():
      pass
    else:
      MapSetting.objects.create(salon=salon)


def create_building_vr():
  projects = Project.objects.all()
  for project in projects:
    if BuildingVr.objects.filter(project=project).exists():
      pass
    else:
      BuildingVr.objects.create(project=project)


def set_project_company_id():
  projects = Project.objects.all()
  for project in projects:
    if project.salon:
      project.company_id = project.salon.company.id
    else:
      pass


def create_calendars():
  projects = Project.objects.all()
  for project in projects:
    if Calendar.objects.filter(project=project).exists():
      pass
    else:
      Calendar.objects.create(project=project)


# create_calendars()
# create_salon_map_setting()
# create_building_vr()
# set_project_company_id()
