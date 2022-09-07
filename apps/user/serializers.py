from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields=[
            'id',
            'account',
            'username',
            'first_name',
            'last_name',
            'is_active',
            'is_staff',
            'verfied',
            'request_verified',
            'picture',
            'banner',
            'location',
            'url',
            'birthday',
            'profile_info',
            'date_created'
        ]