# Generated by Django 3.1.7 on 2022-01-27 07:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0032_auto_20220127_1150'),
    ]

    operations = [
        migrations.RenameField(
            model_name='buildingfloorroom',
            old_name='madori_image',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='buildingfloorroom',
            old_name='madori_thumbnail',
            new_name='thumbnail',
        ),
    ]
