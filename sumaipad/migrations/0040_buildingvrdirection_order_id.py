# Generated by Django 3.1.7 on 2022-02-02 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0039_auto_20220201_1347'),
    ]

    operations = [
        migrations.AddField(
            model_name='buildingvrdirection',
            name='order_id',
            field=models.IntegerField(null=True),
        ),
    ]