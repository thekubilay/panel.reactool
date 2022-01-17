from rest_framework.routers import DefaultRouter
from routes.apis import views
                                                                                              
router = DefaultRouter()
router.register(r"routes", views.RouteViewSet, basename="routes")
urlpatterns = router.urls
