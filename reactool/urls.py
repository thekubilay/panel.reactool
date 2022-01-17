from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from django.views.static import serve
from entry.views import IndexTemplateView

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/', include('companies.routes.urls')),
  path('api/', include('accounts.routes.urls')),
  path('api/', include('salons.routes.urls')),
  path('api/', include('projects.routes.urls')),
  path('api/', include('routes.apis.urls')),
  path('api/app/', include('sumaipad.routes.urls')),
  path('accounts/', include("django_registration.backends.one_step.urls")),
  path('accounts/', include('django.contrib.auth.urls')),
]
urlpatterns += [
 re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
 re_path(r'^.*$', IndexTemplateView.as_view(), name="entry-point"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
