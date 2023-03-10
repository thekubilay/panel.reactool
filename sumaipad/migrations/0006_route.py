# Generated by Django 3.1.7 on 2022-01-06 05:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0010_auto_20220106_1414'),
        ('sumaipad', '0005_auto_20211116_0126'),
    ]

    operations = [
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(blank=True, null=True)),
                ('component', models.CharField(max_length=20, null=True)),
                ('path', models.CharField(max_length=20, null=True)),
                ('name', models.CharField(max_length=20, null=True)),
                ('title', models.CharField(max_length=20, null=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='routes', to='projects.project')),
            ],
            options={
                'ordering': ['order_id'],
            },
        ),
    ]
