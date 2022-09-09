from pathlib import Path
import os
import environ

# Lemon-Py

# Activavión del .env
env = environ.Env()
environ.Env.read_env()


# Direccion donde se encuentra el proyecto
BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG')

ALLOWED_HOSTS = [
    'ml-lemonpy.com',
    'localhost',
    '127.0.0.1'
]


# White List: de donde vienen los llamados de la API
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'https://ml-lemonpy.com',
]

# Llamados CSRF
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'https://lemon-py.com',
]

# Dominio de cookie
#CSRF_COOKIE_DOMAIN = "lemon-py.com"


RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)




# Application definition

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# Apps creadas para el proyecto
PROJECT_APPS =[
    'apps.user',
    'apps.blog',
    'apps.category',
    'apps.contacts',
    'apps.ml',
    'apps.projects'
]

# Apps instaladas con pip
THIRD_PARTY_APPS =[
    'corsheaders',
    'rest_framework',
    'ckeditor',
    'ckeditor_uploader',  
]

# Todas las apps
INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRD_PARTY_APPS



# Configuración de Ck-editor
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'autoParagraph': False
    }
}
CKEDITOR_UPLOAD_PATH = "/media/"


MIDDLEWARE = [
    # Corse Header
    'corsheaders.middleware.CorsMiddleware',
    # Milddleware Security
    'django.middleware.security.SecurityMiddleware',
     # White Noise 
    'whitenoise.middleware.WhiteNoiseMiddleware',
    
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# Database Postgresql
DATABASES = {
    "default": env.db("DATABASE_URL"),
}
DATABASES["default"]["ATOMIC_REQUESTS"] = True


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

# Argon Hashers
PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Buenos_Aires'

USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

# Media files
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static')
]

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# Django Rest Framenwork
REST_FRAMEWORK = {
    # Permisos (cualquier tipo de POST y request)
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    # Paginación
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 16,
}

# Autenticación del Rest Framework
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

FILE_UPLOAD_PERMISSIONS = 0o640

EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'
    # Active Campaign
ACTIVE_CAMPAIGN_URL=os.environ.get('ACTIVE_CAMPAIGN_URL')
ACTIVE_CAMPAIGN_KEY=os.environ.get('ACTIVE_CAMPAIGN_KEY')
