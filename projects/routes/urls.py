from django.urls import path
from rest_framework.routers import DefaultRouter
from projects.routes import views

router = DefaultRouter()
router.register(r"projects", views.ProjectsViewSet, basename="projects")
router.register(r"app/routes", views.RouteViewSet, basename="app_routes")
router.register(r"app/permissions", views.PermissionViewSet, basename="app_permissions")
router.register(r"app/calendars", views.CalendarViewSet, basename="app_calendars")
router.register(r"app/calendar_events", views.CalendarEventViewSet, basename="app_calendar_events")
router.register(r"project_api_tokens", views.ProjectApiTokenViewSet, basename="project_api_tokens")
urlpatterns = router.urls
urlpatterns += [
  path(r"project_details/<str:pk>/", views.ProjectDetailsViewSet.as_view(), name='project_details'),
]
