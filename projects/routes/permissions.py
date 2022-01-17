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


class IsUsersProject(permissions.BasePermission):
  def has_permission(self, request, view):
    return True
    # if request.user.id in view.user.all()
    #   return True


# class IsOwner(permissions.BasePermission):
#   def has_permission(self, request, view):
#     edit_permission = Permission.objects.get(code_name="owner")
#
#     permissionIds = []
#     for perm in request.user.user_roles.all():
#       permissionIds.append(perm.permission.id)
#
#     if not request.user.is_superuser:
#       if int(edit_permission.id) in permissionIds:
#         return True
#     else:
#       return True


class IsSuper(permissions.BasePermission):
  def has_permission(self, request, view):
    user = request.user
    return user.is_superuser
