# Generated by Django 3.1.7 on 2021-08-24 05:31

from django.db import migrations, models
import django.db.models.deletion
import django_resized.forms
import sumaipad.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Building',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('management_fee', models.CharField(max_length=14, null=True)),
                ('fixing_fee', models.CharField(max_length=14, null=True)),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='building', to='projects.project')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='Coord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=50, null=True)),
                ('place', models.CharField(max_length=255, null=True)),
                ('address', models.CharField(max_length=255, null=True)),
                ('lat', models.CharField(max_length=50, null=True)),
                ('lng', models.CharField(max_length=50, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='coords', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='Floor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='floors', to='sumaipad.building')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('link', models.CharField(max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='links', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('menu', models.CharField(blank=True, max_length=10, null=True)),
                ('type', models.CharField(blank=True, max_length=20, null=True)),
                ('plan', models.CharField(blank=True, max_length=50, null=True)),
                ('m2', models.CharField(blank=True, max_length=50, null=True)),
                ('price', models.CharField(blank=True, max_length=50, null=True)),
                ('balcony', models.CharField(blank=True, max_length=255, null=True)),
                ('roof_balcony', models.CharField(blank=True, max_length=255, null=True)),
                ('service_balcony', models.CharField(blank=True, max_length=255, null=True)),
                ('personal_use', models.CharField(blank=True, max_length=255, null=True)),
                ('terrace', models.CharField(blank=True, max_length=255, null=True)),
                ('outdoor_unit', models.CharField(blank=True, max_length=255, null=True)),
                ('alcove', models.CharField(blank=True, max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plans', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='RoomSimulator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('color', models.CharField(max_length=10, null=True)),
                ('name', models.CharField(max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room_simulator', to='projects.project')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='RoomSimulatorContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('option', models.BooleanField(default=False, null=True)),
                ('model_room', models.BooleanField(default=False, null=True)),
                ('where_is', models.CharField(max_length=255, null=True)),
                ('color_en', models.CharField(max_length=255, null=True)),
                ('color_jp', models.CharField(blank=True, max_length=255, null=True)),
                ('color_code', models.CharField(max_length=255, null=True)),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='VistaSimulator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicVistaCompassImagePath)),
                ('repeat', models.BooleanField(default=True)),
                ('compass_start_degree', models.CharField(max_length=3, null=True)),
                ('start_position', models.CharField(max_length=5, null=True)),
                ('pin_top_px', models.IntegerField(default=0, null=True)),
                ('pin_left_px', models.IntegerField(default=0, null=True)),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='vista_simulator', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='VistaSimulatorContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=5, null=True)),
                ('floor', models.CharField(max_length=2, null=True)),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicVistaImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicVistaImagePath)),
                ('vista_simulator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vista_simulator_contents', to='sumaipad.vistasimulator')),
            ],
            options={
                'ordering': ['floor'],
            },
        ),
        migrations.CreateModel(
            name='Slideshow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicSlideshowImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicSlideshowImagePath)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='slideshow', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='RoomSimulatorImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicColorSimImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[200, 200], upload_to=sumaipad.models.makeDynamicColorSimImagePath)),
                ('room_simulator_content', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='room_sim_image', to='sumaipad.roomsimulatorcontent')),
            ],
        ),
        migrations.CreateModel(
            name='RoomSimulatorContentTitle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=255, null=True)),
                ('room_simulator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room_content_titles', to='sumaipad.roomsimulator')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.AddField(
            model_name='roomsimulatorcontent',
            name='room_simulator_content_title',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='room_contents', to='sumaipad.roomsimulatorcontenttitle'),
        ),
        migrations.CreateModel(
            name='RoomSimulatorColorImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicColorSimImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[200, 200], upload_to=sumaipad.models.makeDynamicColorSimImagePath)),
                ('room_simulator_content', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='room_sim_color_image', to='sumaipad.roomsimulatorcontent')),
            ],
        ),
        migrations.CreateModel(
            name='RoomSimulatorBaseImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default=None, null=True, upload_to=sumaipad.models.makeDynamicBaseSimImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, default=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[200, 200], upload_to=sumaipad.models.makeDynamicBaseSimImagePath)),
                ('room_simulator', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='room_sim_base_image', to='sumaipad.roomsimulator')),
            ],
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('compass', models.CharField(max_length=40, null=True)),
                ('number', models.CharField(blank=True, max_length=10, null=True)),
                ('status', models.CharField(max_length=40, null=True)),
                ('menu', models.CharField(max_length=10, null=True)),
                ('type', models.CharField(max_length=20, null=True)),
                ('plan', models.CharField(blank=True, max_length=50, null=True)),
                ('m2', models.CharField(blank=True, max_length=50, null=True)),
                ('price', models.CharField(blank=True, max_length=50, null=True)),
                ('management_fee', models.CharField(blank=True, max_length=50, null=True)),
                ('fixing_fee', models.CharField(blank=True, max_length=50, null=True)),
                ('vr_image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicRoomVrImagePath)),
                ('vr_compass_diff', models.CharField(max_length=4, null=True)),
                ('vr_start_degree', models.CharField(max_length=4, null=True)),
                ('madori_image', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicRoomVrImagePath)),
                ('compass_start_degree', models.CharField(max_length=4, null=True)),
                ('compass_top_position', models.CharField(max_length=4, null=True)),
                ('compass_left_position', models.CharField(max_length=4, null=True)),
                ('sub', models.BooleanField(default=False)),
                ('sub_content', models.CharField(blank=True, max_length=50, null=True)),
                ('floor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rooms', to='sumaipad.floor')),
            ],
        ),
        migrations.CreateModel(
            name='PlanTypeImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicTypeImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicTypeImagePath)),
                ('plan', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='type_image', to='sumaipad.plan')),
            ],
        ),
        migrations.CreateModel(
            name='PlanImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan', models.CharField(max_length=20)),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicImagePath)),
                ('order_id', models.IntegerField(null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='plan_images', to='projects.project')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='MapCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('color', models.CharField(max_length=255, null=True)),
                ('category', models.CharField(max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='map_categories', to='projects.project')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='LinkImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicLinkImagePath)),
                ('link', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='link_image', to='sumaipad.link')),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicGalleryImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicGalleryImagePath)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='DocumentFolder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='document_folders', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('folder', models.CharField(max_length=255, null=True)),
                ('file', models.FileField(null=True, upload_to=sumaipad.models.makeDynamicPdfFilePath)),
                ('name', models.CharField(max_length=255, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documents', to='projects.project')),
            ],
        ),
        migrations.CreateModel(
            name='CoordImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=sumaipad.models.makeDynamicCoordImagePath)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='JPEG', keep_meta=True, null=True, quality=75, size=[400, 400], upload_to=sumaipad.models.makeDynamicCoordImagePath)),
                ('coord', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='coord_images', to='sumaipad.coord')),
            ],
        ),
        migrations.CreateModel(
            name='BuildingParkingFee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(null=True)),
                ('name', models.CharField(max_length=255, null=True)),
                ('price', models.CharField(max_length=14, null=True)),
                ('building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parking_fees', to='sumaipad.building')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.CreateModel(
            name='BuildingBankType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, null=True)),
                ('rate', models.CharField(max_length=14, null=True)),
                ('building', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bank_types', to='sumaipad.building')),
            ],
        ),
    ]
