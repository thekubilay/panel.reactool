from django.contrib import admin
from projects.models import Project, Permission, PRoute, Calendar

admin.site.register(Project)
admin.site.register(Permission)
admin.site.register(PRoute)
admin.site.register(Calendar)
