# Generated by Django 3.1.7 on 2022-04-09 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0004_tutorialimage_tutorials'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutorial',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
