# Generated by Django 5.1.5 on 2025-03-12 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0009_alter_labrequest_id_alter_labresult_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='labrequest',
            name='status',
            field=models.CharField(default='Pending', max_length=50),
        ),
    ]
