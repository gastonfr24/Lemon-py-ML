# Generated by Django 3.2.15 on 2022-09-13 20:05

import apps.ml.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ml', '0005_auto_20220913_1421'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectml',
            name='subtitle',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='projectml',
            name='thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to=apps.ml.models.project_directory_path),
        ),
    ]