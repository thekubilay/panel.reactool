# Generated by Django 3.1.7 on 2022-02-18 13:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0018_token'),
    ]

    operations = [
        migrations.CreateModel(
            name='ApiToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token_id', models.CharField(max_length=255, null=True)),
                ('permanent', models.BooleanField(default=False)),
                ('start_date', models.DateField(null=True)),
                ('end_date', models.DateField(null=True)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.project')),
            ],
        ),
        migrations.DeleteModel(
            name='Token',
        ),
    ]