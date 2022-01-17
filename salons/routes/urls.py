from rest_framework.routers import DefaultRouter
from salons.routes import views

router = DefaultRouter()
router.register(r"salons", views.SalonsViewSet, basename="salons")
router.register(r"salons_places", views.SalonMapPlaceViewSet, basename="salons_places")
router.register(r"salons_places_images", views.SalonMapPlaceImageViewSet, basename="salons_places_images")
router.register(r"salons_places_settings", views.SalonMapSettingViewSet, basename="salons_places_settings")
urlpatterns = router.urls
