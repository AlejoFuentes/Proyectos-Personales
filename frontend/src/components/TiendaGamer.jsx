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

  const marcasListas = marcas.map(m => ({
    imagen: `http://127.0.0.1:8000${m.imagen}`
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
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* <!-- NAVBAR HEADER --> */}

      {/* <-- CARRUSEL PROMOCIÓN --> */}
      <div className='carrusel-principal'>
        <Carrusel 
          items={promosPrincipales} 
          elementosPorPagina={1} 
          ancho={'65%'}
          alto={'450px'}
          separacion={600}
          filas={1}
        />
      </div>
      {/* <!-- CARRUSEL PROMOCIÓN --> */}

      {/* <-- BENEFICIOS --> */}
      <div className="contenedor-beneficios mb-5">
        <div className="barra-beneficios shadow-sm d-flex justify-content-evenly align-items-center">
          
          <div className="beneficio-item d-flex align-items-center gap-3">
            <i className="bi bi-credit-card-2-front icono-beneficio"></i>
            <div className="beneficio-texto d-flex flex-column">
              <span className="titulo-beneficio">Hasta 6 cuotas sin interés</span>
              <span className="subtitulo-beneficio">con tarjetas seleccionadas</span>
            </div>
          </div>

          <div className="separador-beneficio"></div>

          <div className="beneficio-item d-flex align-items-center gap-3">
            <i className="bi bi-truck icono-beneficio"></i>
            <div className="beneficio-texto d-flex flex-column">
              <span className="titulo-beneficio">Envíos rápidos a todo el país</span>
              <span className="subtitulo-beneficio">despacho en 24hs</span>
            </div>
          </div>

          <div className="separador-beneficio"></div>

          <div className="beneficio-item d-flex align-items-center gap-3">
            <i className="bi bi-shield-check icono-beneficio"></i>
            <div className="beneficio-texto d-flex flex-column">
              <span className="titulo-beneficio">Garantía oficial</span>
              <span className="subtitulo-beneficio">de hasta 36 meses</span>
            </div>
          </div>

        </div>
      </div>
      {/* <!-- BENEFICIOS --> */}

      {/* <-- CARRUSEL MARCAS --> */}
      <div className="explorar-categorias mt-5 mb-3 d-flex justify-content-between align-items-center">
        <h3 style={{ fontWeight: 'normal' }}>
          Colaboramos con las mejores <span style={{ fontWeight: 'bold' }}>marcas</span>!
        </h3>
        <div className="d-flex gap-2">
          <button id="btn-prev-categorias" className="flecha-custom">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button id="btn-next-categorias" className="flecha-custom">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className='carrusel-secundario h-100'>
        <Carrusel 
          items={marcasListas} 
          elementosPorPagina={4} 
          ancho={'55%'}
          alto={'170px'}
          separacion={10}
          filas={2}
          idFlechaPrev="#btn-prev-categorias"
          idFlechaNext="#btn-next-categorias"
        />
      </div>
      {/* <!-- CARRUSEL MARCAS --> */}

      <div className='banner-promocion d-flex justify-content-center'>
        <img src='/images/banner-pc.png' type='button'></img>
      </div>
      
      {/* <-- CARRUSEL CATEGORIAS --> */}
      <div className="explorar-categorias mt-5 mb-3 d-flex justify-content-between align-items-center">
        <h3 style={{ fontWeight: 'normal' }}>
          Explorá nuestras <span style={{ fontWeight: 'bold' }}>categorías</span>
        </h3>
        <div className="d-flex gap-2">
          <button id="btn-prev-categorias" className="flecha-custom">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button id="btn-next-categorias" className="flecha-custom">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className='carrusel-secundario h-100'>
        <Carrusel 
          items={categoriasListas} 
          elementosPorPagina={4} 
          ancho={'55%'}
          alto={'170px'}
          separacion={10}
          filas={2}
          idFlechaPrev="#btn-prev-categorias"
          idFlechaNext="#btn-next-categorias"
        />
      </div>
      {/* <!-- CARRUSEL CATEGORIAS --> */}

    </>
  );
}

export default TiendaGamer;