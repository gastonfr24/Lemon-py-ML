from rest_framework import serializers
from .models import RegresionLinealSimple

class RegresionLinealSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegresionLinealSimple
        fields=[
            'experiencia',
            'salario',
        ]

#django rest framework
# JSON