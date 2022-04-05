from django.urls import path
from rest_framework.routers import DefaultRouter
from news.routes import views

router = DefaultRouter()
router.register(r"news", views.NewsLetterViewSet, basename="news")
urlpatterns = router.urls
