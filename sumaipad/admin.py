from django.contrib import admin
from sumaipad.models import (ColorSimulatorRoom, ColorSimulatorRoomPart, ColorSimulatorRoomPartItem, MapSetting,
                             PlanContext, BuildingVr,
                             BuildingVrDirection, BuildingVrDirectionImage)

admin.site.register(ColorSimulatorRoom)
admin.site.register(ColorSimulatorRoomPart)
admin.site.register(ColorSimulatorRoomPartItem)
admin.site.register(MapSetting)
admin.site.register(PlanContext)
admin.site.register(BuildingVr)
admin.site.register(BuildingVrDirection)
admin.site.register(BuildingVrDirectionImage)
