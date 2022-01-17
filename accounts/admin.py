from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib import admin
from accounts.models import (Company, CustomUser, UserProfile)
from django.contrib.auth.admin import UserAdmin


class ProfileInline(admin.StackedInline):
  model = UserProfile
  can_delete = False
  verbose_name_plural = 'profile'
  fk_name = 'current-user'


class CustomUserAdmin(UserAdmin, forms.ModelForm):
  model = CustomUser
  add_fieldsets = (
    (None, {
      'classes': ('wide',),
      'fields': ('username', 'email', 'company', 'password1', 'password2')}
     ),
  )

  # inlines = (ProfileInline, ProfileLimitationInline)
  #
  # def get_inline_instances(self, request, obj=None):
  #   if not obj:
  #     return list()
  #   return super(CustomUserAdmin, self).get_inline_instances(request, obj)

  # hash the password before save.
  def save(self, commit=True):
    user = super(UserCreationForm, self).save(commit=False)
    user.set_password(self.cleaned_data["password"])

    if commit:
      user.save()
    return user


admin.site.register(Company)
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(UserProfile)
