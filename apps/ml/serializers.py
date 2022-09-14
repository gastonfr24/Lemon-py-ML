from rest_framework import serializers
from .models import ProjectML

class ProjectSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    class Meta:
        model=ProjectML
        fields=[
        'title',
        'dificultad',
        'url',
        'tipo',
        'thumbnail',
        'subtitle'
        ]

#django rest framework
# JSON