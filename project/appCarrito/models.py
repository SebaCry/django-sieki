from django.db import models
from auth_app.models import Usuario
from appCatalogo.models import Productos


class Carrito(models.Model):
    ESTADO = (
        ('activo', 'Activo'),
        ('comprado', 'Comprado'),
        ('inactivo', 'Inactivo'),
    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad = models.IntegerField(null=False, default=1)
    valUnit = models.DecimalField(max_digits=8, decimal_places=2)
    estado = models.CharField(max_length=20, choices=ESTADO, default='activo')
    fech_carr = models.DateField()
    estado_car = models.CharField(max_length=50)

    def __str__(self):
        return f"Carrito {self.usuario} - Usuario: {self.usuario.username} - Fecha: {self.fech_carr} - Estado: {self.estado_car}"

# Create your models here.
