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

  def create(self, request, *args, **kwargs):
    serializer = NewsLetterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
