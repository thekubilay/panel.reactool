# Generated by Django 3.1.7 on 2022-05-16 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0047_auto_20220418_1538'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='tab_logo_text',
            field=models.CharField(default='ホーム', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='tab_logo_view',
            field=models.BooleanField(default=True),
        ),
    ]
