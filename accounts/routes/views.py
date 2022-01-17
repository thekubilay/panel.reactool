import json

from django.shortcuts import get_object_or_404
from accounts.routes.permissions import (IsSuperAdmin, IsAdmin, IsUserItSelf, IsCompanyManager)
from rest_framework import viewsets
from accounts.models import (CustomUser, UserProfile)
from accounts.routes.serializers import (UserSerializer, UserProfileSerializer, UpdateUserAsNormalSerializer,
                                         UpdateUserAsSuperAdminSerializer, CreateUserAsSuperAdminSerializer,
                                         CreateUserAsNormalSerializer)
from rest_framework.response import Response


class UserProfileViewSet(viewsets.ModelViewSet):
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin]
    if self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf]
    if self.action == 'partial_update':
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf]
    if self.action == "retrieve":
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin]
    if self.action == "list":
      permission_classes = [IsSuperAdmin | IsAdmin]
    if self.action == 'destroy':
      permission_classes = [IsSuperAdmin | IsAdmin]

    return [permission() for permission in permission_classes]

  def get_queryset(self):
    user = self.request.user
    if user.is_superuser or user.is_staff:
      profiles = UserProfile.objects.all()
    else:
      profiles = UserProfile.objects.filter(user__company=user.company)

    return profiles


class UserViewSet(viewsets.ModelViewSet):
  queryset = CustomUser.objects.all()
  serializer_class = UserSerializer

  def get_permissions(self):
    permission_classes = [IsSuperAdmin]
    if self.action == "update":
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf | IsCompanyManager]
    if self.action == 'partial_update':
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf | IsCompanyManager]
    if self.action == "retrieve":
      permission_classes = [IsSuperAdmin | IsAdmin | IsUserItSelf | IsCompanyManager]
    if self.action == "create":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    if self.action == "list":
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]
    if self.action == 'destroy':
      permission_classes = [IsSuperAdmin | IsAdmin | IsCompanyManager]

    return [permission() for permission in permission_classes]

  def get_queryset(self):
    user = self.request.user
    if user.is_superuser or user.is_staff:
      users = CustomUser.objects.all()
    elif user.is_company_manager:
      users = CustomUser.objects.filter(user__company=user.company)
    else:
      users = json.dumps([])

    return users

  def retrieve(self, *args, **kwargs):
    pk = kwargs.get("pk", None)
    if pk == "current":
      user = get_object_or_404(self.queryset, pk=self.request.user.id)
      serializer = UserSerializer(user)
      return Response(serializer.data)
    else:
      user = get_object_or_404(self.queryset, pk=pk)
      serializer = UserSerializer(user)
      return Response(serializer.data)

  def update(self, request, *args, **kwargs):
    instance = self.queryset.get(pk=kwargs.get('pk'))
    if self.request.user.is_superuser or self.request.user.is_staff:
      serializer = UpdateUserAsSuperAdminSerializer(instance, data=request.data)
    else:
      serializer = UpdateUserAsNormalSerializer(instance, data=request.data)

    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)

  def create(self, request, *args, **kwargs):
    if request.data["company"] == 504212282 and (self.request.user.is_staff or self.request.user.is_superuser):
      serializer = CreateUserAsSuperAdminSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      user = serializer.save()
      user.is_superuser = True
      user.is_staff = True
      user.last_name = request.data["last_name"]
      user.first_name = request.data["first_name"]
      user.save()
    else:
      serializer = CreateUserAsNormalSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      user = serializer.save()
      user.is_company_manager = True
      user.last_name = request.data["last_name"]
      user.first_name = request.data["first_name"]
      user.save()

    return Response(serializer.data)
