from rest_framework import serializers
from logs.models import Error, Action


class ErrorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Error
    fields = "__all__"


class ActionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Action
    fields = "__all__"
