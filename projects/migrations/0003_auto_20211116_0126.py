# Generated by Django 3.1.7 on 2021-11-16 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_projectlimitation_can_display_vr'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='logo_place',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='project',
            name='salon_view',
            field=models.BooleanField(default=True),
        ),
    ]
