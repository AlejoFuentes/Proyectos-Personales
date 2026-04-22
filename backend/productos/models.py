from django.db import models
from django.contrib.auth.models import User # Traemos el usuario mágico de Django

class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    imagen = models.ImageField(upload_to='categorias/', null=True, blank=True)

    def __str__(self):
        return self.nombre

class Subcategoria(models.Model):
    categoria_padre = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.categoria_padre.nombre} > {self.nombre}"

class Marca(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    imagen = models.ImageField(upload_to='marcas/', null=True, blank=True)
    
    def __str__(self):
        return self.nombre

class Producto(models.Model):
    # Relaciones (Foreign Keys)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    subcategoria = models.ForeignKey(Subcategoria, on_delete=models.SET_NULL, null=True, blank=True)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    
    # Datos del producto
    nombre = models.CharField(max_length=200) # Ej: "RTX 5060" o "Ryzen 7 5700x"
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    imagen = models.ImageField(upload_to='productos/', null=True, blank=True)
    
    def __str__(self):
        return f"{self.marca.nombre} {self.nombre}"

class Pedido(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    pagado = models.BooleanField(default=False)
    # Acá podrías agregar dirección de envío, método de pago, etc.

    def __str__(self):
        return f"Pedido {self.id} - {self.usuario.username}"

class DetallePedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)
    precio_historico = models.DecimalField(max_digits=10, decimal_places=2) 
    # ^ Se guarda el precio en el momento de la compra por si el producto sube mañana

    def __str__(self):
        return f"{self.cantidad} x {self.producto.nombre}"