# Generated by Django 3.1.7 on 2022-01-18 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0015_auto_20220118_1043'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mapplaceimage',
            old_name='coord',
            new_name='map_place',
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='administrative',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='all',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='line',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='road',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='station',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='mapsetting',
            name='water',
            field=models.BooleanField(default=True),
        ),
    ]