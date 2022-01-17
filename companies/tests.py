from django.test import TestCase
from projects.models import Project
from salons.models import Salon, MapSetting


def create_salon_map_setting():
  salons = Salon.objects.all()
  for salon in salons:
    if MapSetting.objects.filter(salon=salon).exists():
      pass
    else:
      MapSetting.objects.create(salon=salon)


def set_project_company_id():
  projects = Project.objects.all()
  for project in projects:
    if project.salon:
      project.company = project.salon.company
    else:
      pass


create_salon_map_setting()
set_project_company_id()
