from django.db.models import *
from django.utils import  timezone

from django.shortcuts import reverse
from apps.category.models import Category


# directorio de las imagenes y videos del Projecto
def user_directory_path(instance, filename):
    title = instance.title
    return 'projects/{0}/{1}'.format(title.replace(':',' '), filename)

# Directorio de las imagenes y videos de los capitulos del proyecto
def chapter_directory_path(instance, filename):
    title = instance.title
    return 'projects/{0}/{1}/{2}'.format(instance.course.title.replace(':',' '), title.replace(':',' '), filename)

# Directorio de imagenes/videos de las lecciones
def lesson_directory_path(instance, filename):
    return 'projects/{0}/{1}/Lesson #{2}:{3}/{4}'.format(instance.course, instance.chapter, instance.lesson_number,instance.title, filename)



class Project(Model):
    #authors = ManyToManyField(Author)
    #pricing_tiers = ManyToManyField(Pricing, blank=True)
    title = CharField(max_length=100)
    category = ForeignKey(Category, on_delete= PROTECT)
    description = TextField()
    thumbnail = ImageField(upload_to = user_directory_path, blank = True, null = True)
    video = FileField(upload_to = user_directory_path, blank=True, null=True)
    slug = SlugField(max_length=250,unique_for_date='published', null=False, unique=True)
    published = DateTimeField(default=timezone.now)
    is_active = BooleanField(default=True)
    
    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title    




class Chapter(Model):
    project = ForeignKey(Project, on_delete=CASCADE, blank=True, null=True)
    chapter_number = IntegerField(blank=True,null=True)
    title = CharField(max_length=100)
    thumbnail = ImageField(upload_to = chapter_directory_path, blank =  True, null = True)
    video = FileField(upload_to = user_directory_path, blank=True, null=True)
    content = TextField(blank=True, null=True)

    def __str__(self):
     return self.title  



class Lesson(Model):
    course = ForeignKey(Project, on_delete=CASCADE, blank=True, null=True)
    chapter = ForeignKey(Chapter, on_delete=CASCADE, blank=True, null=True)
    lesson_number = IntegerField(blank=True,null=True)
    title = CharField(max_length=100)
    thumbnail = ImageField(upload_to = chapter_directory_path, blank =  True, null = True)
    video = FileField(upload_to = user_directory_path)
    vimeo_video = CharField(verbose_name='Vimeo Video ID (optional)', max_length=100, blank=True, null=True)
    content = TextField(blank=True, null=True)

    def __str__(self):
        return self.title  

