from rest_framework import viewsets
from rest_framework.response import Response
from routes.apis.permissions import (IsSuperAdmin, IsAdmin)
from routes.models import (Route)
from routes.apis.serializers import RouteSerializer


class RouteViewSet(viewsets.ModelViewSet):
  queryset = Route.objects.all()
  serializer_class = RouteSerializer
  permission_classes = [IsSuperAdmin, IsAdmin]

  def create(self, request, *args, **kwargs):
    if "reordered" in request.data:
      items = request.data["reordered"]
      for i, item in enumerate(items):
        route = Route.objects.get(id=item["id"])
        route.order_id = i + 1
        route.save()
    else:
      serializer = RouteSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)

    return Response(status=200)
