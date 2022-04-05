from django.urls import path
from rest_framework.routers import DefaultRouter
from accounts.routes import views

router = DefaultRouter()
router.register(r"users", views.UserViewSet, basename="users")
router.register(r"user-profiles", views.UserProfileViewSet, basename="user-profiles")
router.register(r"user-news", views.UserNewsLetterViewSet, basename="user_news")

urlpatterns = router.urls
urlpatterns += [
  path(r"change_password/", views.UserUpdatePassword.as_view(), name='change_password'),
]

