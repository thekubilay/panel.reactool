# Generated by Django 3.1.7 on 2022-04-18 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_auto_20220307_1319'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='company_owner',
            field=models.BooleanField(default=True),
        ),
    ]
