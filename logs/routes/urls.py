from django.urls import path
from rest_framework.routers import DefaultRouter
from logs.routes import views

router = DefaultRouter()
router.register(r"errors", views.ErrorViewSet, basename="errors")
router.register(r"actions", views.ActionViewSet, basename="actions")
urlpatterns = router.urls
