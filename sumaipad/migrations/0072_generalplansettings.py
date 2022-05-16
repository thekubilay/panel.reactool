# Generated by Django 3.1.7 on 2022-05-16 06:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0048_auto_20220516_1442'),
        ('sumaipad', '0071_auto_20220516_1534'),
    ]

    operations = [
        migrations.CreateModel(
            name='GeneralPlanSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.IntegerField(null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genera_plan_settings', to='projects.project')),
            ],
        ),
    ]