# Generated by Django 3.1.7 on 2022-04-25 08:14

from django.db import migrations, models
import django.db.models.deletion
import django_resized.forms
import sumaipad.models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0047_auto_20220418_1538'),
        ('sumaipad', '0064_auto_20220412_1050'),
    ]

    operations = [
        migrations.CreateModel(
            name='RoomVrVendor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=255, null=True)),
                ('sub_title', models.CharField(blank=True, max_length=255, null=True)),
                ('url', models.URLField(null=True)),
                ('image', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicRoomVrImagePath)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room_vr_vendors', to='projects.project')),
            ],
        ),
    ]
