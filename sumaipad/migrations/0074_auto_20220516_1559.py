# Generated by Django 3.1.7 on 2022-05-16 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0073_auto_20220516_1557'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generalplansetting',
            name='position',
            field=models.IntegerField(default=0, null=True),
        ),
    ]