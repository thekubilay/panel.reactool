from django.urls import path
from rest_framework.routers import DefaultRouter
from projects.routes import views

router = DefaultRouter()
router.register(r"projects", views.ProjectsViewSet, basename="projects")
urlpatterns = router.urls
urlpatterns += [
  path(r"project_details/<str:pk>/", views.ProjectDetailsViewSet.as_view(), name='project_details'),
]
