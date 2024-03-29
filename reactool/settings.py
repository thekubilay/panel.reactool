import os
from pathlib import Path
from decouple import config
from django.contrib.messages import constants as messages

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = config("SECRET_KEY")

DEBUG = config("DEBUG", default=True, cast=bool)

ALLOWED_HOSTS = [
  "127.0.0.1",
  "test-panel.reactool.jp",
  "panel.reactool.jp",
  "panel-env.eba-wvnskzvw.ap-northeast-1.elasticbeanstalk.com",
  "panel-dev-env.ap-northeast-1.elasticbeanstalk.com",
  "bucket-reactool-dev.s3.amazonaws.com",
  "bucket-reactool.s3.amazonaws.com",
  "demo.nazareworlds.com",
  "192.168.11.13",
  "test.nulunus.com"
]
CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = [
  "http://localhost:3000",
  "https://test.reactool.jp",
  "https://www.test.reactool.jp",
  "https://testv1-05.d1vfpwmx5ce0v3.amplifyapp.com",
  "https://app.reactool.jp",
  "https://vr.reactool.jp",
  "https://colors.reactool.jp",
  "https://demo.nazareworlds.com",
  "https://192.168.11.13:8000",
  "https://test.nulunus.com",
]
X_FRAME_OPTIONS = 'ALLOWALL'
XS_SHARING_ALLOWED_METHODS = ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE']

INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'django.contrib.sites',

  "companies", "accounts", "salons", "projects", "routes", "sumaipad", "permissions", "logs", "news",
  "rest_framework", 'rest_framework_simplejwt', 'crispy_forms', "tutorials",
  "corsheaders", "django_cleanup.apps.CleanupConfig", "storages",
  "django_vite",
]
SITE_ID = 1
AUTH_USER_MODEL = "accounts.CustomUser"
# ACCOUNT_ADAPTER = ("allauth.account.adapter.DefaultAccountAdapter",)
ACCOUNT_EMAIL_VERIFICATION = "none"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = True
ACCOUNT_AUTHENTICATED_LOGIN_REDIRECTS = False
AUTHENTICATION_BACKENDS = (
  "django.contrib.auth.backends.ModelBackend",
  # "allauth.account.auth_backends.AuthenticationBackend",
)
LOGIN_URL = "/accounts/login/"
LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/accounts/login/"

DJANGORESIZED_DEFAULT_SIZE = [700, 700]
DJANGORESIZED_DEFAULT_QUALITY = 75
DJANGORESIZED_DEFAULT_KEEP_META = True
DJANGORESIZED_DEFAULT_FORCE_FORMAT = 'JPEG'
DJANGORESIZED_DEFAULT_FORMAT_EXTENSIONS = {'JPEG': ".jpg"}
DJANGORESIZED_DEFAULT_NORMALIZE_ROTATION = True

REST_FRAMEWORK = {
  'DEFAULT_AUTHENTICATION_CLASSES': [
    'rest_framework.authentication.SessionAuthentication',
    'rest_framework.authentication.TokenAuthentication',
    # 'rest_framework_simplejwt.authentication.JWTAuthentication',
  ],
  'DEFAULT_PERMISSION_CLASSES': [
    'rest_framework.permissions.IsAuthenticated',
  ]
}

MIDDLEWARE = [
  'django.middleware.security.SecurityMiddleware',
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.common.CommonMiddleware',
  'django.middleware.csrf.CsrfViewMiddleware',
  'django.contrib.auth.middleware.AuthenticationMiddleware',
  'django.contrib.messages.middleware.MessageMiddleware',
  'django.middleware.clickjacking.XFrameOptionsMiddleware',
  'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'reactool.urls'

TEMPLATES = [
  {
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [BASE_DIR / 'templates']
    ,
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

WSGI_APPLICATION = 'reactool.wsgi.application'

if 'RDS_DB_NAME' in os.environ:
  DATABASES = {
    'default': {
      'ENGINE': 'mysql.connector.django',
      'NAME': config("DATABASE_NAME"),
      'USER': "reactool",
      'PASSWORD': config("DATABASE_PASSWORD"),
      'HOST': config("DATABASE_HOST"),
      'PORT': 3306,
    }
  }
else:
  DATABASES = {
    'default': {
      'ENGINE': 'mysql.connector.django',
      'NAME': 'reactool',
      'USER': 'root',
      'PASSWORD': 'snickers.007',
      'HOST': 'localhost',
      'PORT': '3306'
    }
  }

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

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

# CRONJOB
CRONJOBS = [
  ('10 */12 * * *', 'accounts.cron.remove_scheduled_user'),
]

LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# If use HMR or not.s

DJANGO_VITE_DEV_MODE = DEBUG

GOOGLE_MAP_API_KEY = config("GOOGLE_MAP_API_KEY")

MESSAGE_TAGS = {
  messages.ERROR: 'error',
  messages.SUCCESS: 'success',
  messages.INFO: 'info',
}

AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')
AWS_DEFAULT_ACL = 'public-read'
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
AWS_S3_FILE_OVERWRITE = False
AWS_LOCATION = 'static'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

if DEBUG:
  DJANGO_VITE_ASSETS_PATH = BASE_DIR / "app/dist"
  STATIC_ROOT = "static"

  # DJANGO_VITE_ASSETS_PATH = BASE_DIR / "app/src"
  STATICFILES_DIRS = [
    # BASE_DIR / "static",
    DJANGO_VITE_ASSETS_PATH,
  ]

  STATIC_URL = '/static/'

  MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
  MEDIA_URL = '/media/'


else:
  STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{AWS_LOCATION}/'
  STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
  PUBLIC_MEDIA_LOCATION = 'media'
  MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/'
  DEFAULT_FILE_STORAGE = "reactool.aws_storages.MediaStorage"

  DJANGO_VITE_STATIC_URL = STATIC_URL
  DJANGO_VITE_ASSETS_PATH = "reactool/static"
  STATIC_ROOT = "static"

  STATICFILES_DIRS = [
    DJANGO_VITE_ASSETS_PATH
  ]
