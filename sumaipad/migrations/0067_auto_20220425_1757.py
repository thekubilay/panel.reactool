# Generated by Django 3.1.7 on 2022-04-25 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0066_auto_20220425_1742'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roomvrvendor',
            name='url',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
