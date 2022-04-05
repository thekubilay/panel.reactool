from rest_framework import serializers
from tutorials.models import Tutorial, TutorialImage


class TutorialImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = TutorialImage
    fields = "__all__"


class TutorialSerializer(serializers.ModelSerializer):
  tutorial_images = TutorialImageSerializer(many=True, required=False)

  class Meta:
    model = Tutorial
    fields = "__all__"
