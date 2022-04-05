from rest_framework.routers import DefaultRouter
from tutorials.routes import views

router = DefaultRouter()
router.register(r"tutorials", views.TutorialViewSet, basename="tutorials")
router.register(r"tutorial_images", views.TutorialImageViewSet, basename="tutorial_images")
urlpatterns = router.urls
