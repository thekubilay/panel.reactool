# Generated by Django 3.1.7 on 2022-05-16 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0076_auto_20220516_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generalplansetting',
            name='position',
            field=models.IntegerField(default=1, null=True),
        ),
    ]
