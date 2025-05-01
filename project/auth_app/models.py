from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomerUserManager(BaseUserManager):
    def create_user(self, email,username, tel_usua, first_name, last_name, password=None):
        if not email or not username:
            raise ValueError('Users without email and username')
                
        user = self.model(
            email = self.normalize_email(email),
            username = username,
            tel_usua = tel_usua,
            first_name = first_name,
            last_name = last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, tel_usua, first_name, last_name, password):
        user = self.create_user(
            email = self.normalize_email(email),
            username = username,
            tel_usua = tel_usua,
            first_name = first_name,
            last_name = last_name,
            password = password
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user
    
class Usuario(AbstractBaseUser):
    ROLES = (
        ('admin', 'Admin'),
        ('user', 'User'),
    )

    email = models.EmailField(max_length=45, unique=True)
    username = models.CharField(max_length=45, unique=True)
    tel_usua = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    rol = models.CharField(choices=ROLES, max_length=10, default='usuario')

    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'tel_usua', 'first_name', 'last_name']

    objects = CustomerUserManager()

    def __str__(self):
        return '{}{}'.format(self.username, self.email)
    
    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True
    
    def clean(self):
        import re
        if not re.match(r'^\d{10}$', self.tel_usua):
            raise ValueError('El número de teléfono debe tener 10 dígitos')
    
    class Meta:
        verbose_name_plural = 'Usuarios'
# Create your models here.
