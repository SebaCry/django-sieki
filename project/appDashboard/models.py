from django.db import models
from appCatalogo.models import Productos
from appPedido.models import Pedido
from auth_app.models import Usuario

class Inventario(models.Model):
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad_dispo = models.IntegerField()

    def __str__(self):
        return f"Inventario {self.producto.nom_produc} - Cantidad disponible: {self.cantidad_dispo}"

class Domicilio(models.Model):
    ESTADO = (
        ('pendiente', 'Pendiente'),
        ('enviado', 'Enviado'),
        ('entregado', 'Entregado'),
    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=255)
    fecha_entre = models.DateField()
    estado = models.CharField(choices=ESTADO,max_length=50)

    def __str__(self):
        return f"Pedido {self.pedido.id} - Domicilio: {self.direccion}, {self.ciudad}, {self.estado}, {self.codigo_postal}"


# Create your models here.
