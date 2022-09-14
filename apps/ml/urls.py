from django.urls import path
from .views import *




urlpatterns = [
    path('projects', ProjectsListView.as_view()),
    path('simple-regresion', PreprocessingView.as_view()),
    path('multiple-regresion', MultipleRegression.as_view())
]
