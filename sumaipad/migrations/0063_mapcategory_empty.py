# Generated by Django 3.1.7 on 2022-03-31 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0062_colorsimulatorroompart_column_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapcategory',
            name='empty',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
