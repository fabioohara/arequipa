import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';

import comillas from '../assets/comillas.png'

const slides = [
  {
    id: 1,
    image: t1,
    testimonio:  (
        <>«Es bueno que Senisse, Álvarez García Abogados cuente con una abogada como la Dra. Katherine Álvarez. Cuando le hicimos la consulta, ella no dudó en darnos soluciones legales anticpando lo que podría pasar y como proteger y salvaguardar los intereses de nuestra empresa y equipo corporativo.»,
        </>
      ),
    testigo: 'Tecom Servicios Generales SAC',
    cargo: 'Asesora de TECOM Servicios Generales SAC',
  },
  {
    id: 2,
    image: t2,
    testimonio: (
        <>«Estamos satisfechos con la labor que viene realizando Senisse, Álvarez García Abogados, ahora sabemos que podemos contar con la asesoría legal de la Dra. Katherine y dejar de estar preocupados en el aspecto legal ya que ahora podemos seguir enfocados en el crecimiento de nuestras relaciones de negocios.»,   
          </>
      ),
    testigo: 'SAIMA CO., LTD.',
    cargo: '',
  },
  {
    id: 3,
    image: t3,
    testimonio: (
        <>
          «En nuestra empresa es importante que todo funcione de la manera correcta y adecuada asesoría, para lo cual contar con la asesoría de la Dra. Katherine García nos quita un peso de encima. Recomendado.»
        </>
      ),
    testigo: "DWIGHT'S CARPENTRY & PAINTING LLC",
    cargo: '',
  },
  {
    id: 4,
    image: t4,
    testimonio: (
        <>
          «Nuestra corporación tuvo una experiencia positiva trabajando con la firma. Están bien informados acerca del rubro al cual nos dedicamos, persiguiendo el mejor acuerdo posible. El resultado superó nuestras expectativas, agradecidos por su paciencia, la guía, el consejo y liderazgo de Senisse, Álvarez García Abogados.»
        </>
      ),
    testigo: "HRS CO., LTD.",
    cargo: '',
  },
];

const BannerMiniArea = () => {
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
   
    <div className="banner-mini redondeado">
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

export default BannerMiniArea;
