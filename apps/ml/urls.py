from django.urls import path
from .views import *




urlpatterns = [
    path('simple-regresion', PreprocessingView.as_view())
]
