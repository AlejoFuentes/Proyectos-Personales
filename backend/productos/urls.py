from django.urls import path
from . import views

urlpatterns = [
    path('api/marcas/', views.obtener_marcas, name='obtener_marcas'),
    path('api/categorias/', views.obtener_categorias, name='obtener_categorias'),
    path('api/productos/', views.obtener_productos, name='obtener_productos'),
]