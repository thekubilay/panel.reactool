from django.urls import path
from rest_framework.routers import DefaultRouter
from companies.routes import views


router = DefaultRouter()
router.register(r"companies", views.CompanyViewSet, basename="companies")
urlpatterns = router.urls
