# Generated by Django 3.1.7 on 2022-03-10 02:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0034_calendar_holiday_codes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='calendarevent',
            old_name='display',
            new_name='rendering',
        ),
    ]