from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from accounts.models import (CustomUser, UserProfile)


class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    exclude = ("user",)


class UserSerializer(serializers.ModelSerializer):
  profile = UserProfileSerializer(required=False, read_only=True)

  class Meta:
    model = CustomUser
    fields = (
      "id", "company", "first_name", "last_name", "username", "email", "is_superuser", "is_staff", "is_company_manager",
      "profile",)
    read_only_fields = ["is_superuser", "is_staff", "is_company_manager"]


class UsersForCompanySerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = (
    "id", "company", "last_name", "first_name", "username", "email", "is_superuser", "is_staff", "is_company_manager")
    read_only_fields = ["is_superuser", "is_staff", "is_company_manager"]


class UpdateUserAsSuperAdminSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ("id", "company", "last_name", "first_name", "username", "email")


class UpdateUserAsNormalSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ("id", "company", "last_name", "first_name", "username", "email")


class CreateUserAsNormalSerializer(serializers.ModelSerializer):
  first_name = serializers.StringRelatedField(required=False)
  last_name = serializers.StringRelatedField(required=False)

  class Meta:
    model = CustomUser
    fields = ["company", "last_name", "first_name", "username", "email", "password"]
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    if validated_data.get('password'):
      validated_data['password'] = make_password(validated_data['password'])
    return super(CreateUserAsNormalSerializer, self).create(validated_data)


class CreateUserAsSuperAdminSerializer(serializers.ModelSerializer):
  first_name = serializers.StringRelatedField(required=False)
  last_name = serializers.StringRelatedField(required=False)

  class Meta:
    model = CustomUser
    fields = ["company", "last_name", "first_name", "username", "email", "password"]
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    if validated_data.get('password'):
      validated_data['password'] = make_password(validated_data['password'])
    return super(CreateUserAsSuperAdminSerializer, self).create(validated_data)
