import json

from rest_framework import viewsets
from companies.models import Company
from salons.models import Salon
from projects.models import Project
from accounts.models import CustomUser
from companies.routes.serializers import CompanySerializer
from rest_framework.permissions import IsAuthenticated
from companies.routes.permissions import (IsSuperAdmin, IsAdmin)
from accounts.routes.serializers import UsersForCompanySerializer
from salons.routes.serializers import SalonSerializer
from projects.routes.serializers import ProjectsForCompanySerializer
from rest_framework.response import Response
from sumaipad.models import Building, BuildingFloor, BuildingFloorRoom


class CompanyViewSet(viewsets.ModelViewSet):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsAuthenticated]

  def retrieve(self, *args, **kwargs):
    pk = kwargs.get("pk", None)
    companies = Company.objects.get(id=pk)

    users = CustomUser.objects.filter(company_id=pk)
    user_arr = []
    for user in users:
      user_arr.append(UsersForCompanySerializer(user).data)

    salons = Salon.objects.filter(company_id=pk)
    salon_arr = []
    for salon in salons:
      salon_arr.append(SalonSerializer(salon).data)

    projects = Project.objects.filter(salon__company_id=pk)
    project_arr = []
    overview = {
      "total_sales": 0,
      "projects": [],
      "total_rooms": 0,
      "total_completed": 0,
      "total_uncompleted": 0,
    }
    for i, project in enumerate(projects):
      validated = ProjectsForCompanySerializer(project).data
      validated["company"] = int(pk)
      project_arr.append(validated)
      # overview["projects"].append({
      #   "id": project.id,
      #   "name": project.name,
      #   "sales": 0,
      #   "rooms": 0,
      #   "completed": 0,
      #   "uncompleted": 0,
      # })
      # try:
      #   rooms = BuildingFloorRoom.objects.filter(building_floor__building__project=project)
      #   overview["total_rooms"] += len(rooms)
      #   for room in rooms:
      #     overview["projects"][i]["rooms"] += 1
      #     if room.status == "完売済":
      #       overview["projects"][i]["completed"] += 1
      #       overview["total_completed"] += 1
      #     if room is not None and room.price and room.status == "完売済":
      #       overview["projects"][i]["sales"] += int(room.price)
      #       overview["total_sales"] += int(room.price)
      #     if room.status != "完売済":
      #       overview["projects"][i]["uncompleted"] += 1
      #       overview["total_uncompleted"] += 1
      #
      # except Building.DoesNotExist:
      #   pass

    data = {
      "id": CompanySerializer(companies).data["id"],
      "users": user_arr,
      "salons": salon_arr,
      "projects": project_arr,
      "overview": overview
    }
    return Response(data)
