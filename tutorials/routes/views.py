from rest_framework import viewsets
from rest_framework.response import Response
from tutorials.models import Tutorial, TutorialImage
from tutorials.routes.serializers import TutorialSerializer, TutorialImageSerializer


class TutorialViewSet(viewsets.ModelViewSet):
  queryset = Tutorial.objects.all()
  serializer_class = TutorialSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        project = Tutorial.objects.get(id=item["id"])
        project.order_id = i + 1
        project.save()
    else:
      serializer = TutorialSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)


class TutorialImageViewSet(viewsets.ModelViewSet):
  queryset = TutorialImage.objects.all()
  serializer_class = TutorialImageSerializer

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        project = TutorialImage.objects.get(id=item["id"])
        project.order_id = i + 1
        project.save()
    else:
      serializer = TutorialImageSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)
