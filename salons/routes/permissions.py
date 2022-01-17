from rest_framework import permissions


class IsSuperAdmin(permissions.BasePermission):
  def has_permission(self, request, view):
    user = request.user
    return user.is_superuser and user.is_staff


class IsAdmin(permissions.BasePermission):
  def has_permission(self, request, view):
    user = request.user
    return user.is_staff


class IsCompanyManager(permissions.BasePermission):
  def has_permission(self, request, view):
    user = request.user
    return user.is_company_manager


class ReadOnly(permissions.BasePermission):
  def has_permission(self, request, view):
    return True
