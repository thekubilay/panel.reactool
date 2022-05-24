from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from news.models import NewsLetter
from news.routes.serializers import NewsLetterSerializer
from news.routes.permissions import (IsSuperAdmin, IsAdmin)
from rest_framework.permissions import IsAuthenticated


class NewsLetterViewSet(viewsets.ModelViewSet):
  queryset = NewsLetter.objects.all()
  serializer_class = NewsLetterSerializer
  permission_classes = [IsSuperAdmin | IsAdmin | IsAuthenticated]

  def get_permissions(self):
    permission_classes = [IsAuthenticated]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "partial_update":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "destroy":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "list":
      permission_classes = [IsSuperAdmin | IsAdmin]
    elif self.action == "retrieve":
      permission_classes = [IsSuperAdmin]

    return [permission() for permission in permission_classes]

  def create(self, request, *args, **kwargs):
    serializer = NewsLetterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
