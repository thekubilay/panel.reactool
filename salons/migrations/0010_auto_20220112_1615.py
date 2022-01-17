# Generated by Django 3.1.7 on 2022-01-12 07:15

from django.db import migrations, models
import django_resized.forms
import salons.models


class Migration(migrations.Migration):

    dependencies = [
        ('salons', '0009_auto_20220107_1656'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapplace',
            name='order_id',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='mapplaceimage',
            name='thumbnail',
            field=django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[200, 200], upload_to=salons.models.makeDynamicMapPlaceImagePath),
        ),
        migrations.AlterField(
            model_name='mapsetting',
            name='all',
            field=models.BooleanField(default=True),
        ),
    ]
