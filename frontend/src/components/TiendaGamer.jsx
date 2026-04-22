import Header from './Header.jsx';
import Carrusel from './Carrusel.jsx';
import "./TiendaGamer.css"
import { obtenerMarcas, obtenerCategorias } from '../services/apis.js';
import { useState, useEffect } from 'react';

const TiendaGamer = () => {

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerMarcas().then((data) => {
      setMarcas(data); 
    }).catch((error) => {
      console.error("Ocurrió un error al traer las marcas:", error);
    });

  },[]);

  useEffect(() => {
    obtenerCategorias().then((data) => {
      setCategorias(data); 
    }).catch((error) => {
      console.error("Ocurrió un error al traer las marcas:", error);
    });

  },[]);
  
  const promosPrincipales = [
    { imagen: "/images/carrusel1.png", textoAlternativo: "Promo 1" },
    { imagen: "/images/carrusel2.png", textoAlternativo: "Promo 2" },
    { imagen: "/images/carrusel3.png", textoAlternativo: "Promo 3" },
    { imagen: "/images/carrusel4.png", textoAlternativo: "Promo 4" }
  ];
  
  const categoriasListas = categorias.map(cat => ({
    imagen: `http://127.0.0.1:8000${cat.imagen}`,
    titulo: cat.nombre
  }));

  return (
    <>
      {/* <-- NAVBAR HEADER --> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Armá tu PC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notebooks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PC armadas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* <!-- NAVBAR HEADER --> */}

      <Carrusel items={promosPrincipales} elementosPorPagina={1} />

      <div className="container mt-5 mb-3">
        <h3 style={{ fontWeight: 'normal' }}>
          Explorá nuestras <span style={{ fontWeight: 'bold' }}>categorías</span>
        </h3>
      </div>
      
      <Carrusel items={categoriasListas} elementosPorPagina={4} />

    </>
  );
}

export default TiendaGamer;