# Generated by Django 3.1.7 on 2022-03-24 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0037_auto_20220310_1209'),
    ]

    operations = [
        migrations.AddField(
            model_name='proute',
            name='panel',
            field=models.CharField(max_length=20, null=True),
        ),
    ]