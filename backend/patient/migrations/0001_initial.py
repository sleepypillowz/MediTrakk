# Generated by Django 5.1.5 on 2025-01-28 03:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('patient_id', models.CharField(editable=False, max_length=8, primary_key=True, serialize=False, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=200, null=True)),
                ('middle_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=11)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('complaint', models.TextField(blank=True, choices=[('general_illness', 'General Illness'), ('injury', 'Injury'), ('checkup', 'Check-up'), ('other', 'Other')], max_length=100, null=True)),
                ('street_address', models.CharField(blank=True, max_length=100, null=True)),
                ('barangay', models.CharField(blank=True, max_length=100, null=True)),
                ('municipal_city', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Diagnosis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diagnosis_code', models.CharField(blank=True, max_length=10, null=True)),
                ('diagnosis_description', models.TextField()),
                ('diagnosis_date', models.DateField()),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diagnoses', to='patient.patient')),
            ],
        ),
        migrations.CreateModel(
            name='Prescription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medication', models.CharField(max_length=100)),
                ('dosage', models.CharField(max_length=50)),
                ('frequency', models.CharField(max_length=50)),
                ('note', models.TextField()),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prescriptions', to='patient.patient')),
            ],
        ),
    ]
