from apps.category import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import RegresionLinealSimple
from .serializers import RegresionLinealSimpleSerializer

class PreprocessingView(APIView):
# Creacion de dato
    def post(self, request, format=None):
        data= self.request.data

        #new_data_model = RegresionLinealSimple.objects.get_or_create(
        #    experiencia = data['experiencia'],
        #    salario = data['ganancia']
        #) 


        return Response({'message':'dato creado'})

# Muestra de dato
    def get( self, request, *args, **kwargs):
        if RegresionLinealSimple.objects.all().exists():

            rs = RegresionLinealSimple.objects.all()
            serializer = RegresionLinealSimpleSerializer(rs, many=True)

            return Response({'rls': serializer.data}, status= status.HTTP_200_OK)
        
        else:
            print('no hay')