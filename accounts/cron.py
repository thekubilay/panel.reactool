from datetime import datetime
from accounts.models import CustomUser


def remove_scheduled_user():
  date = datetime.now().date()
  users = CustomUser.objects.filter(is_remove_scheduled=True, remove_date__lte=date)
  for user in users:
    user.delete()
