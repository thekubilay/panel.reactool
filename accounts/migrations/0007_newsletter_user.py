# Generated by Django 3.1.7 on 2022-03-07 03:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_newsletter'),
    ]

    operations = [
        migrations.AddField(
            model_name='newsletter',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='news', to=settings.AUTH_USER_MODEL),
        ),
    ]
