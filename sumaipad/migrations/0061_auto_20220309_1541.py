# Generated by Django 3.1.7 on 2022-03-09 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sumaipad', '0060_auto_20220307_1003'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='buildingbanktype',
            options={'ordering': ['order_id']},
        ),
        migrations.AddField(
            model_name='buildingbanktype',
            name='order_id',
            field=models.IntegerField(null=True),
        ),
    ]
