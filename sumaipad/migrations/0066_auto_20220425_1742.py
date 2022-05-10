# Generated by Django 3.1.7 on 2022-04-25 08:42

from django.db import migrations, models
import django_resized.forms
import sumaipad.models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0065_roomvrvendor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roomvrvendor',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicRoomVrImagePath),
        ),
        migrations.AlterField(
            model_name='roomvrvendor',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
