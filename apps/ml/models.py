from django.db import models


def project_directory_path(instance, filename):
    return 'project/{0}/{1}'.format(instance.title, filename)



class ProjectML(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    dificultad = models.IntegerField(blank=True, null=True)
    url = models.CharField(max_length=255, blank=True, null=True)
    tipo = models.CharField(max_length=255, blank=True, null=True)
    thumbnail = models.ImageField(upload_to = project_directory_path, null=True, blank=True)
    subtitle = models.CharField(max_length=255, blank=True, null=True)

    def get_thumbnail(self):
        if self.thumbnail:
            return self.thumbnail.url
        return ''

    def __str__(self):
        return self.title


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


class RegresionLinealMultiple(models.Model):
    RD_Spend = models.FloatField(blank=True, null=True)
    Administration = models.FloatField(blank=True, null=True)
    Marketing_Spend = models.FloatField(blank=True, null=True)
    State = models.CharField(max_length=255, blank=True, null=True)
    Profit = models.FloatField(blank=True, null=True)