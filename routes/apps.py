from django.apps import AppConfig


class RoutesConfig(AppConfig):
  name = 'routes'

  def ready(self):
    import routes.signals
