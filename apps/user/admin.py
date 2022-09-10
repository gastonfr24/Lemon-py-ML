from django.contrib import admin
from . import models
from import_export.admin import ImportExportModelAdmin

# registramos en el admin
@admin.register(models.UserAccount)

# creamos un buscador 
class PostAdmin(ImportExportModelAdmin):
    list_display= ('account', 'username', 'verified', 'is_staff')
    search_fields=('account', 'username',)
