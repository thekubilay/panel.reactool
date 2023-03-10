# Generated by Django 3.1.7 on 2022-03-07 03:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
        ('accounts', '0005_auto_20220221_1223'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsLetter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=20, null=True)),
                ('content', models.TextField(max_length=255, null=True)),
                ('seen', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('news_letter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='news.newsletter')),
            ],
        ),
    ]
