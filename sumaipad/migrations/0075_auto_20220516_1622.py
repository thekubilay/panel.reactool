# Generated by Django 3.1.7 on 2022-05-16 07:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0048_auto_20220516_1442'),
        ('sumaipad', '0074_auto_20220516_1559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generalplansetting',
            name='project',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='genera_plan_settings', to='projects.project'),
        ),
    ]