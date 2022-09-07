from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import UserSerializer
from .models import UserAccount

from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest


class CreateUserProfileView(APIView):
    def post(self, request, format=None):
        data= self.request.data
        return Response({'message':'Usuario creado'})