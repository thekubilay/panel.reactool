from django.contrib import admin
from sumaipad.models import (ColorSimulatorRoom, ColorSimulatorRoomPart, ColorSimulatorRoomPartItem, MapSetting,
                             PlanContext, BuildingVr, GeneralPlan, GeneralPlanSetting, LoanSetting,
                             BuildingVrDirection, BuildingVrDirectionImage, VistaSimulator, VistaSimulatorContent)

admin.site.register(ColorSimulatorRoom)
admin.site.register(ColorSimulatorRoomPart)
admin.site.register(ColorSimulatorRoomPartItem)
admin.site.register(VistaSimulator)
admin.site.register(VistaSimulatorContent)
admin.site.register(MapSetting)
admin.site.register(PlanContext)
admin.site.register(BuildingVr)
admin.site.register(BuildingVrDirection)
admin.site.register(BuildingVrDirectionImage)
admin.site.register(GeneralPlan)
admin.site.register(GeneralPlanSetting)
admin.site.register(LoanSetting)
