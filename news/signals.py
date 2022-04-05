from django.db.models.signals import post_save, pre_save, pre_delete
from django.dispatch import receiver
from news.models import NewsLetter
from accounts.models import NewsLetter as UserNewsLetter, CustomUser


@receiver(post_save, sender=NewsLetter)
def createPermissionToEveryProject(sender, instance, created, **kwargs):
  users = CustomUser.objects.all()
  if created:
    for user in users:
      UserNewsLetter.objects.create(user=user,
                                    news_letter=instance,
                                    type=instance.type,
                                    title=instance.title,
                                    content=instance.content)


@receiver(pre_save, sender=NewsLetter)
def savePermissionToEveryProject(sender, instance, **kwargs):
  letters = UserNewsLetter.objects.filter(news_letter=instance)
  for letter in letters:
    letter.type = instance.type
    letter.title = instance.title
    letter.content = instance.content
    letter.save()


@receiver(pre_delete, sender=NewsLetter)
def deletePermissionToEveryProject(sender, instance, **kwargs):
  letters = UserNewsLetter.objects.filter(news_letter=instance)
  for letter in letters:
    letter.delete()
