from django.db import models
from auth_app.models import Usuario
from appCarrito.models import Carrito

class Pedido(models.Model):

    ESTADO = (
        ('pendiente', 'Pendiente'),
        ('enviado', 'Enviado'),
        ('entregado', 'Entregado'),

    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    fech_pedido = models.DateField()
    estado_pedido = models.CharField(choices=ESTADO, max_length=10)
    monto_total = models.DecimalField(max_digits=10, decimal_places=2)
    gastos_envio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Pedido {self.id} - {self.estado_pedido} - {self.monto_total}"
    
class DetallesPedido(models.Model):
    
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    cantidad = models.IntegerField(null=False, default=1)
    valUnit = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"DetallesPedido {self.id} - {self.pedido} - {self.producto} - {self.cantidad}"

class MetodoPago(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"MetodoPago: {self.nombre}"

class Pagos(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    metodo_pago = models.ForeignKey(MetodoPago, on_delete=models.CASCADE)
    fech_pago = models.DateField()
    monto_pago = models.DecimalField(max_digits=10, decimal_places=2)
    # comprobante_pago = models.FileField(upload_to='comprobantes/')
    

    def __str__(self):
        return f"Pago {self.id} - {self.fech_pago} - {self.monto_pago} - {self.pedido}"
    

# Create your models here.
