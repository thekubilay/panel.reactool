# Generated by Django 3.1.7 on 2022-03-24 07:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0038_proute_panel'),
    ]

    operations = [
        migrations.RenameField(
            model_name='proute',
            old_name='panel',
            new_name='panel_name',
        ),
    ]