from rest_framework.routers import DefaultRouter
from permissions.routes import views

router = DefaultRouter()
router.register(r"projects", views.ProjectPermissionsViewSet, basename="project_permissions")
urlpatterns = router.urls
