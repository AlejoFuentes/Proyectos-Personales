from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Marca, Categoria, Producto
from .serializers import MarcaSerializer, CategoriaSerializer, ProductoSerializer

# ENDPOINT: Traer todas las Marcas
@api_view(['GET'])
def obtener_marcas(request):
    marcas = Marca.objects.all() 
    serializer = MarcaSerializer(marcas, many=True) 
    return Response(serializer.data)

# ENDPOINT: Traer todas las Categorías
@api_view(['GET'])
def obtener_categorias(request):
    categorias = Categoria.objects.all()
    serializer = CategoriaSerializer(categorias, many=True)
    return Response(serializer.data)

# ENDPOINT: Traer todos los Productos
@api_view(['GET'])
def obtener_productos(request):
    productos = Producto.objects.all()
    serializer = ProductoSerializer(productos, many=True)
    return Response(serializer.data)