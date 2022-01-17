from django.apps import AppConfig


class SumaipadConfig(AppConfig):
  name = 'sumaipad'

  def ready(self):
    import sumaipad.signals
