from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver


# # remove before image
# @receiver(pre_save, sender=PlanTypeImage)
# def updatePlanTypeImage(sender, instance, *args, **kwargs):
#   if instance.pk:
#     is_exist = PlanTypeImage.objects.filter(pk=instance.pk).exists()
#     if is_exist:
#       existing_image = PlanTypeImage.objects.get(pk=instance.pk)
#       if instance.image and existing_image.image != instance.image:
#         existing_image.image.delete(False)
