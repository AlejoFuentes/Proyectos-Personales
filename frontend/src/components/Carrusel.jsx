import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import "./Carrusel.css";

const Carrusel = ({ 

  items = [], 
  elementosPorPagina = 1,
  ancho, 
  alto,
  separacion = 10,  
  filas = 1,
  idFlechaPrev,
  idFlechaNext,

}) => {
  
  if (items.length === 0) return null;

  const usarLoop = filas === 1
  
  return (
    <div className="carrusel mb-5"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Grid]}
        spaceBetween={separacion}
        slidesPerView={elementosPorPagina}
        grid={filas > 1 ? { rows: filas, fill: "row" } : undefined}
        
        navigation={
          idFlechaPrev && idFlechaNext 
            ? { prevEl: idFlechaPrev, nextEl: idFlechaNext } 
            : true
        }
        
        onBeforeInit={(swiper) => {
          if (idFlechaPrev && idFlechaNext) {
            swiper.params.navigation.prevEl = idFlechaPrev;
            swiper.params.navigation.nextEl = idFlechaNext;
          }
        }}

        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={usarLoop}
        rewind={!usarLoop}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img 
              src={item.imagen} 
              alt={item.textoAlternativo || item.titulo} 
              style={{ 
                width: ancho,
                height: alto, 
                borderRadius: '25px', 
                objectFit: 'cover' 
              }} 
            />
            {item.titulo && (
              <div className="slide-titulo">
                {item.titulo.toUpperCase()}
              </div>
            )}
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrusel;