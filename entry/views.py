from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.base import TemplateView


class IndexTemplateView(LoginRequiredMixin, TemplateView):
  def get_template_names(self):
    if settings.DEBUG:
      template = "index-dev.html"
    else:
      template = "index.html"

    return template
