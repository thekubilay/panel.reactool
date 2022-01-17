from django.urls import path
from rest_framework.routers import DefaultRouter
from accounts.routes import views

router = DefaultRouter()
router.register(r"users", views.UserViewSet, basename="users")
router.register(r"user-profiles", views.UserProfileViewSet, basename="user-profiles")

urlpatterns = router.urls

