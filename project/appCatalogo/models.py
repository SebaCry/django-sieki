from django.db import models


class Categorias(models.Model):
    nom_cate = models.CharField(max_length=50)
    desc_cate = models.TextField()

    def __str__(self):
        return f"Categoria: {self.nom_cate} - Descripcion: {self.desc_cate}"
    

class Productos(models.Model):
    nom_produc = models.CharField(max_length=50, unique=True)
    des_produc = models.TextField()
    unidad_produc = models.CharField(max_length=10, null=False)
    exist_produc = models.IntegerField(null=True)
    stock_produc = models.IntegerField()
    precio_produc = models.DecimalField(max_digits=10, decimal_places=2)
    # imagen_produc = models.ImageField()
    categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE)

    def __str__(self):
        return f"Producto: {self.nom_produc} - Descripcion: {self.des_produc} - Stock: {self.stock_produc} - Precio: {self.precio_produc} - Categoria: {self.categoria.nom_cate}"

# Create your models here.
