from django.contrib import admin
from . import models

# registramos en el admin
@admin.register(models.UserAccount)

# creamos un buscador 
class PostAdmin(admin.ModelAdmin):
    list_display= ('account', 'username', 'verified', 'is_staff')
    search_fields=('account', 'username',)
