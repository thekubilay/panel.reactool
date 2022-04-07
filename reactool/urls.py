from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from django.views.static import serve
from entry.views import IndexTemplateView
from reactool import views

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/', include('companies.routes.urls')),
  path('api/', include('accounts.routes.urls')),
  path('api/', include('salons.routes.urls')),
  path('api/', include('projects.routes.urls')),
  path('api/', include('routes.apis.urls')),
  path('api/', include('news.routes.urls')),
  path('api/', include('tutorials.routes.urls')),
  path('api/app/', include('sumaipad.routes.urls')),
  path('api/logs/', include('logs.routes.urls')),
  path('api/permissions/', include('permissions.routes.urls')),

  path('accounts/login/', views.page_login, name="page_login"),
  path('accounts/logout/', views.page_logout, name="page_logout"),
  path('404/', views.page_error, name="page_error"),

]
urlpatterns += [
                 re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
                 re_path(r'^.*$', IndexTemplateView.as_view(), name="entry-point"),
               ] + static(settings.MEDIA_ROOT, document_root=settings.MEDIA_ROOT)
