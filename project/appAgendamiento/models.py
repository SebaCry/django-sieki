from django.db import models
from django.conf import settings

class Servicio(models.Model):
    nom_ser = models.CharField(max_length=45, unique=True)
    desc_ser = models.TextField()
    precio_ser = models.DecimalField(decimal_places=2, max_digits=10)
    
    def __str__(self):
        return f'{self.nom_ser}'

class Citas(models.Model):
    ESTADO = (
        ('agendada', 'Agendada'),
        ('finalizada', 'Finalizada'),
        ('cancelada', 'Cancelada')
    )
    
    fecha_hora = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(choices=ESTADO, max_length=20)
    usuario = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.usuario} - {self.servicio} ({self.estado})'
    

    

# Create your models here.
