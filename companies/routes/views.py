import json

from rest_framework import viewsets
from companies.models import Company
from salons.models import Salon
from projects.models import Project
from accounts.models import CustomUser
from companies.routes.serializers import CompanySerializer
from companies.routes.permissions import (IsSuperAdmin, IsAdmin)
from accounts.routes.serializers import UsersForCompanySerializer
from salons.routes.serializers import SalonSerializer
from projects.routes.serializers import ProjectsForCompanySerializer
from rest_framework.response import Response


class CompanyViewSet(viewsets.ModelViewSet):
  queryset = Company.objects.all()
  serializer_class = CompanySerializer
  permission_classes = [IsSuperAdmin | IsAdmin]

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
    for project in projects:
      validated = ProjectsForCompanySerializer(project).data
      validated["company"] = int(pk)
      project_arr.append(validated)

    data = {
      "company": CompanySerializer(companies).data,
      "users": user_arr,
      "salons": salon_arr,
      "projects": project_arr,
    }
    return Response(data)
