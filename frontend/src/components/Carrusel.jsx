import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Carrusel.css";

const Carrusel = ({ items = [], elementosPorPagina = 1 }) => {
  
  if (items.length === 0) return null; 

  // MAGIA: Si es 1 elemento (banner), altura 450px y separación 30. 
  // Si son 4 (categorías), altura 300px y separación 20.
  const esBanner = elementosPorPagina === 1;
  const alturaImagen = esBanner ? '450px' : '150px';
  const anchoImagen = esBanner ? '65%' : '150px';
  const separacion = esBanner ? 600 : 20;

  return (
    <div className="carrusel-principal mb-5"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={separacion}
        slidesPerView={elementosPorPagina}
        centeredSlides={esBanner} // Solo centramos si es el banner gigante
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img 
              src={item.imagen} 
              alt={item.textoAlternativo || item.titulo} 
              style={{ 
                width: anchoImagen,
                height: alturaImagen, 
                borderRadius: '25px', 
                objectFit: 'cover' 
              }} 
            />
            {/* El texto con degradado */}
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