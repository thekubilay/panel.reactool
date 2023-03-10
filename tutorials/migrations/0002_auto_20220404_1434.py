# Generated by Django 3.1.7 on 2022-04-04 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TutorialImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=25, null=True)),
                ('order_id', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=100, null=True)),
                ('sub_title', models.CharField(max_length=200, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('video', models.FileField(blank=True, null=True, upload_to='tutorials/videos')),
                ('video_thumbnail', models.ImageField(blank=True, null=True, upload_to='tutorials/videos')),
                ('active', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
        migrations.RemoveField(
            model_name='tutorial',
            name='image',
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pdf',
            field=models.FileField(null=True, upload_to='tutorials/pdf'),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pdf_size',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='size',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='tutorials/videos'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='video_thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to='tutorials/videos'),
        ),
    ]
