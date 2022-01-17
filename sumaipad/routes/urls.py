from rest_framework.routers import DefaultRouter
from sumaipad.routes import views

router = DefaultRouter()

router.register(r"routes", views.RouteViewSet, basename="app_routes")
router.register(r"galleries", views.GalleryViewSet, basename="app_galleries")
router.register(r"links", views.LinkViewSet, basename="app_links")
router.register(r"documents", views.DocumentViewSet, basename="app_documents")
router.register(r"document_folders", views.DocumentFolderViewSet, basename="app_document_folders")
# router.register(r"plans", views.PlanViewSet, basename="plans")
# router.register(r"plan-menus", views.PlanMenuViewSet, basename="plan-menus")
# router.register(r"type-images", views.PlanTypeImageViewSet, basename="type-images")
# router.register(r"plan-images", views.PlanImageViewSet, basename="plan-images")
# router.register(r"room-simulators", views.RoomSimulatorViewSet, basename="room-simulators")
# router.register(r"room-simulator-base-images", views.RoomSimulatorBaseImageViewSet,
#                 basename="room-simulator-base-images")
# router.register(r"room-simulator-content-titles", views.RoomSimulatorContentTitleViewSet,
#                 basename="room-simulator-content-titles")
# router.register(r"room-simulator-contents", views.RoomSimulatorContentViewSet, basename="room-simulator-contents")
# router.register(r"room-simulator-images", views.RoomSimulatorImageViewSet, basename="room-simulator-images")
# router.register(r"room-simulator-color-images", views.RoomSimulatorColorImageViewSet,
#                 basename="room-simulator-color-images")
# router.register(r"vista-simulators", views.VistaSimulatorViewSet, basename="vista-simulators")
# router.register(r"vista-simulator-contents", views.VistaSimulatorContentsViewSet, basename="vista-simulator-contents")
# router.register(r"map-settings", views.MapSettingViewSet, basename="map-settings")
# router.register(r"coords", views.CoordViewSet, basename="coords")
# router.register(r"map-categories", views.MapCategoryViewSet, basename="map-categories")
# router.register(r"coord-images", views.CoordImageViewSet, basename="coord-images")
# router.register(r"documents", views.DocumentsViewSet, basename="documents")
# router.register(r"document-folders", views.DocumentFoldersViewSet, basename="document-folders")
# router.register(r"links", views.LinksViewSet, basename="links")
# router.register(r"rooms", views.RoomViewSet, basename="rooms")
# router.register(r"floors", views.FloorViewSet, basename="floors")
# router.register(r"buildings", views.BuildingViewSet, basename="buildings")
# router.register(r"parking-fees", views.BuildingParkingFeeViewSet, basename="parking-fees")
# router.register(r"bank-types", views.BuildingBankTypeViewSet, basename="bank-types")
# router.register(r"gallery", views.GalleryViewSet, basename="gallery")
# router.register(r"slideshow", views.SlideshowViewSet, basename="slideshow")
# router.register(r"room-vr", views.RoomVrViewSet, basename="room-vr")
# router.register(r"room-vr-floors", views.RoomVrFloorViewSet, basename="room-vr-floors")

urlpatterns = router.urls
