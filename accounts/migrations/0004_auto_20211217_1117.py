# Generated by Django 3.1.7 on 2021-12-17 02:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20211217_1117'),
        ('projects', '0006_auto_20211217_1117'),
        ('salons', '0002_auto_20211217_1117'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Company',
        ),
        migrations.DeleteModel(
            name='Permission',
        ),
        migrations.DeleteModel(
            name='UserRole',
        ),
    ]
