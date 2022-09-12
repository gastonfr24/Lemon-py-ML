from apps.category import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import RegresionLinealSimple
from .serializers import RegresionLinealSimpleSerializer      
           
            #Importar las librerías
import numpy as np
import pandas as pd


class PreprocessingView(APIView):
# Creacion de dato
    def post(self, request, format=None):
        data= self.request.data

        new_data_model = RegresionLinealSimple.objects.get_or_create(
            experiencia = data['experiencia'],
            salario = data['ganancia']
        ) 


        return Response({'message':'dato creado'}, status= status.HTTP_201_CREATED)

# Muestra de dato
    def get( self, request, *args, **kwargs):
        if RegresionLinealSimple.objects.all().exists():


            rls = RegresionLinealSimple.objects.all()
            
            X= []
            y = []
            for data in rls:
                xp = data.experiencia
                salary = data.salario
                X.append(xp)
                y.append(salary)

            # Coversion de lista a array
            X = np.array(X)
            y = np.array(y)

            X=X.reshape(-1, 1)
            y=y.reshape(-1, 1)

            # Division de set de entrenamiento y prueba
            from sklearn.model_selection import train_test_split
            
            X_train, X_test, y_train, y_test = train_test_split(X,y, test_size= 1/3)    

                
            # Creación del modelo de Regresión Lineal Simple
            from sklearn.linear_model import LinearRegression

            
            # Entrenamiento del modelo
            reg = LinearRegression().fit(X_train, y_train)

            # Array de predicciones
            y_predict_train = reg.predict(X_train)


            # Convertimos el array a lista
            y_list_predict = y_predict_train.flatten().tolist()
            

            y_list_train = y_train.flatten().tolist()


            X_train_list = X_train.flatten().tolist()


            # Odenamos las listas asi van de los de menos experiencia a los de mas
            X_train_list = sorted(X_train_list)
            y_list_train_list = sorted(y_list_train)
            y_list_predict_list = sorted(y_list_predict)
                
            score = reg.score(X_train, y_train)
            score = round(score, 3)
            #serializer = RegresionLinealSimpleSerializer(rls, many=True)

            return Response({'rls': {'salario_predict':y_list_predict_list,'y_real':y_list_train_list, 'experiencia':X_train_list, 'score':score}}, status= status.HTTP_200_OK)
        
        else:
            return Response({'rls': {'salario_predict':'sin resultados'}}, status= status.HTTP_500_INTERNAL_SERVER_ERROR)