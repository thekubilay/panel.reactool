# Generated by Django 3.1.7 on 2021-12-17 02:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('permissions', '0001_initial'),
        ('projects', '0005_auto_20211217_1055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectrole',
            name='permission',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_permissions', to='permissions.userpermission'),
        ),
    ]
