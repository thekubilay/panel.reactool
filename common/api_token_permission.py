from datetime import datetime
from projects.models import ApiToken as ProjectTokens
from salons.models import ApiToken as SalonTokens


def api_token_salon_permission(salon, api_token):
  if salon.token_on:
    date = datetime.now().date()

    is_token_permanent = SalonTokens.objects.filter(project=salon,
                                                    token_id__exact=api_token,
                                                    permanent=True
                                                    ).exists()
    if is_token_permanent:
      return True
    else:
      result = SalonTokens.objects.filter(project=salon,
                                          token_id__exact=api_token,
                                          start_date__lte=date,
                                          end_date__gte=date,
                                          ).exists()
      return result
  else:
    return True


def api_token_project_permission(project, api_token):
  if project.token_on:
    date = datetime.now().date()

    is_token_permanent = ProjectTokens.objects.filter(project=project,
                                                      token_id__exact=api_token,
                                                      permanent=True
                                                      ).exists()
    if is_token_permanent:
      return True
    else:
      result = ProjectTokens.objects.filter(project=project,
                                            token_id__exact=api_token,
                                            start_date__lte=date,
                                            end_date__gte=date,
                                            ).exists()
      return result
  else:
    return True
