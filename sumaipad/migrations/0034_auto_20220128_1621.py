# Generated by Django 3.1.7 on 2022-01-28 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0033_auto_20220127_1628'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vistasimulatorcontent',
            old_name='panorama_type',
            new_name='loop',
        ),
        migrations.RenameField(
            model_name='vistasimulatorcontent',
            old_name='type',
            new_name='time',
        ),
        migrations.AddField(
            model_name='vistasimulatorcontent',
            name='bg',
            field=models.BooleanField(default=False),
        ),
    ]