from django.contrib import admin
from .models import Categoria, Subcategoria, Marca, Producto, Pedido, DetallePedido

# Registramos las categorías y marcas de forma simple
admin.site.register(Categoria)
admin.site.register(Subcategoria)
admin.site.register(Marca)

# Registramos los productos con un panel personalizado para ver más columnas
@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'marca', 'categoria', 'precio', 'stock') # Columnas a mostrar
    list_filter = ('marca', 'categoria') # Agrega un panel lateral para filtrar
    search_fields = ('nombre', ) # Agrega una barra de búsqueda

admin.site.register(Pedido)
admin.site.register(DetallePedido)