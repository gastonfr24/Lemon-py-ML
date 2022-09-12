from django.db import models

class ProjectML(models.Model):
    proyecto = models.CharField(max_length=255, blank=True, null=True)
    dificultad = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.proyecto


class Preprocesamiento(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    edad = models.IntegerField(blank=True, null=True)
    salario = models.IntegerField( blank=True, null=True)
    comprado = models.BooleanField(blank=True, null=True)


class RegresionLinealSimple(models.Model):
    experiencia = models.FloatField(blank=True, null=True)
    salario = models.IntegerField(blank=True, null=True)
    proyecto = models.ForeignKey(ProjectML, default=1 , on_delete= models.PROTECT, null=True, blank=True)

    def __str__(self):
        return str(self.experiencia)