import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

export const obtenerProductos = async () => {
    try {
        const res = await api.get('/productos/'); 
        return res.data; 
    } catch (error) {
        console.error("Error al traer productos:", error);
        return [];
    }
};

export const obtenerCategorias = async () => {
    try {
        const res = await api.get('/categorias/');
        return res.data;
    } catch (error) {
        console.error("Error al traer categorías:", error);
        return [];
    }
};

export const obtenerMarcas = async () => {
    try {
        const res = await api.get('/marcas/');
        return res.data;
    } catch (error) {
        console.error("Error al traer marcas:", error);
        return [];
    }
};