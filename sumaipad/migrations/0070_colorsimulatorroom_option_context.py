# Generated by Django 3.1.7 on 2022-05-16 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0069_auto_20220513_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='colorsimulatorroom',
            name='option_context',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
