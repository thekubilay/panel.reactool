# Generated by Django 3.1.7 on 2022-01-21 05:08

from django.db import migrations, models
import django_resized.forms
import sumaipad.models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0024_planfieldoptions'),
    ]

    operations = [
        migrations.AddField(
            model_name='plancontext',
            name='image',
            field=models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicImagePath),
        ),
        migrations.AddField(
            model_name='plancontext',
            name='ppm',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='plancontext',
            name='thumbnail',
            field=django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicImagePath),
        ),
    ]
