from django.contrib import admin
from . import models


@admin.register(models.UserAccount)

class PostAdmin(admin.ModelAdmin):
    list_display= ('account', 'username', 'verified', 'is_staff')
    search_fields=('account', 'username',)
