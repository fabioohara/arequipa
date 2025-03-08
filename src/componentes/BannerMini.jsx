import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.png';
import comillas from '../assets/comillas.png'

const slides = [
  {
    id: 1,
    image: t1,
    testimonio:  (
        <>«Para nosotros es muy importante contar con el respaldo y blindaje legal que nos brinda Senisse
           Abogados para mantener nuestro crecimiento y velar por la protección permanente de los
            derechos de todo nuestro equipo corporativo.»,
        </>
      ),
    testigo: 'Henry Llosa',
    cargo: 'Empresario',
  },
  {
    id: 2,
    image: t2,
    testimonio: (
        <>«Desde que contraté a Senisse Abogados entendí que el caso penal en que estaba involucrado
        
         injustamente tenía unasolución, a diferencia de otros abogados, tengo confianza en el tipo de
        
          defensa que me dan.»,   
          </>
      ),
    testigo: 'Esteban Tarazona Matta',
    cargo: 'Médico Anestesiólogo',
  },
  {
    id: 3,
    image: t3,
    testimonio: (
        <>
          «Me siento muy contenta con los resultados del caso laboral resuelto a favor de la empresa;
         
          gracias a la abogada Alexandra Chipana, por su compromiso, su tiempo y dedicación que nos
         
          brindó a lo largo de este proceso.
         
          A partir de ahora los recomiendo debido a su profesionalismo y compromiso, como también al
         
          estudio «Senisse Abogados» al que pertenece.»
        </>
      ),
    testigo: 'Rosario Aliaga Pipa',
    cargo: 'Administradora',
  },
];

const BannerMini = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out', // 🔹 Suaviza la animación
    arrows: false,
    pauseOnHover: true,
    swipe: true,
  };

  return (
    <>
   
    <div className="banner-mini">
    <img className="overImg" src={comillas} alt="" />
      <Slider {...settings} className="slick-slider-mini">
        {slides.map((slide, index) => (
          <div key={slide.id} className="slick-slide-mini">
            <div className="slide-content-mini">
             
                <p>{slide.testimonio}</p>
                <h1>{slide.testigo}<br />{slide.cargo}</h1>
               
            
              <img className="banner-mini-img" src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default BannerMini;
