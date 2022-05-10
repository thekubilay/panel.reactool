from rest_framework.routers import DefaultRouter
from sumaipad.routes import views

router = DefaultRouter()

router.register(r"galleries", views.GalleryViewSet, basename="app_galleries")

router.register(r"links", views.LinkViewSet, basename="app_links")

router.register(r"documents", views.DocumentViewSet, basename="app_documents")
router.register(r"document_folders", views.DocumentFolderViewSet, basename="app_document_folders")

router.register(r"map_settings", views.MapSettingViewSet, basename="app_map_settings")
router.register(r"map_categories", views.MapCategoryViewSet, basename="app_map_categories")
router.register(r"map_places", views.MapPlaceViewSet, basename="app_map_places")
router.register(r"map_place_images", views.MapPlaceImageViewSet, basename="app_map_place_images")

router.register(r"plan_fields", views.PlanFieldViewSet, basename="app_plan_fields")
router.register(r"plan_contents", views.PlanContentViewSet, basename="app_plan_contents")
router.register(r"plan_contexts", views.PlanContextViewSet, basename="app_plan_contexts")
router.register(r"plan_field_options", views.PlanFieldOptionViewSet, basename="app_plan_field_options")

router.register(r"general_plans", views.GeneralPlanViewSet, basename="app_general_plans")

router.register(r"building", views.BuildingViewSet, basename="app_building")
router.register(r"building_floors", views.BuildingFloorViewSet, basename="app_building_floors")
router.register(r"building_floor_rooms", views.BuildingFloorRoomViewSet, basename="app_building_floor_rooms")


router.register(r"bank_types", views.LoanBankTypeViewSet, basename="app_building_bank_types")
router.register(r"parking_fees", views.ParkingFeeViewSet, basename="app_building_parking_fees")


router.register(r"building_vr_directions", views.BuildingVrDirectionViewSet, basename="app_building_vr_directions")
router.register(r"building_vr_direction_images", views.BuildingVrDirectionImageViewSet, basename="app_building_vr_direction_images")

router.register(r"vista_simulators", views.VistaSimulatorViewSet, basename="app_vista_simulators")
router.register(r"vista_simulator_contents", views.VistaSimulatorContentViewSet, basename="app_vista_simulator_contents")

router.register(r"color_simulator_rooms", views.ColorSimulatorRoomViewSet, basename="app_color_simulator_rooms")
router.register(r"color_simulator_room_parts", views.ColorSimulatorRoomPartViewSet, basename="app_color_simulator_room_parts")
router.register(r"color_simulator_room_part_items", views.ColorSimulatorRoomPartItemViewSet, basename="app_color_simulator_room_part_items")

router.register(r"room_vr_vendors", views.RoomVrVendorViewSet, basename="app_room_vr_vendors")
router.register(r"room_vrs", views.RoomVrViewSet, basename="app_room_vrs")
router.register(r"room_vr_floors", views.RoomVrFloorViewSet, basename="app_room_vr_floors")
router.register(r"room_vr_next_rooms", views.RoomVrNextRoomViewSet, basename="app_room_vr_next_rooms")

# router.register(r"parking-fees", views.BuildingParkingFeeViewSet, basename="parking-fees")
# router.register(r"bank-types", views.BuildingBankTypeViewSet, basename="bank-types")

urlpatterns = router.urls
