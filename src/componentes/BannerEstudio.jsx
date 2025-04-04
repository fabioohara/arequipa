import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import estudio from "../assets/estudio.jpg";
import estudio2 from "../assets/estudio2.jpg";



const slidesDesktop = [
  {
    id: 1,
    image: estudio,
    title: "El Estudio",
    description:
      "En Senisse, Álvarez Garcia Abogados estamos comprometidos en brindar soluciones legales efectivas para salvaguardar tus intereses.",
  },
  {
    id: 2,
    image: estudio,
    title: "El Estudio",
    description:
    "En Senisse, Álvarez Garcia Abogados estamos comprometidos en brindar soluciones legales efectivas para salvaguardar tus intereses.",
},
];

const slidesMobile = [
  {
    id: 1,
    image: estudio2,
    title: "El Estudio",
    description:
    "En Senisse, Álvarez Garcia Abogados estamos comprometidos en brindar soluciones legales efectivas para salvaguardar tus intereses.",
},
  {
    id: 2,
    image: estudio2,
    title: "El Estudio",
    description:
    "En Senisse, Álvarez Garcia Abogados estamos comprometidos en brindar soluciones legales efectivas para salvaguardar tus intereses.",
},
];

const BannerEstudio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    swipe: false,
  };

  return (
    <>
    <div className="banner">
      {isMobile ? (
        <Slider {...settings} className="slick-slider">
          {slidesMobile.map((slide) => (
            <div key={slide.id} className="slick-slide">
              <div className="mobile-slide-content">
                <img
                  className="mobile-banner-img"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />
                <div className="mobile-shadow-estudio">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings} className="slick-slider">
          {slidesDesktop.map((slide) => (
            <div key={slide.id} className="slick-slide">
              <div className="slide-content">
                <div className="shadow-estudio">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                
                </div>
                <img
                  className="banner-img sinfiltro"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>

    <div className="estudio-ayuda-container">
      <h2 className='estudio-h2'>Nuestra historia, tu tranquilidad</h2>
      <hr className='hr'/>
      <p>
      Somos un estudio de abogados prestigioso adscrito al Grupo Senisse, creador de Senisse Abogados en la ciudad de Lima y ahora en Arequipa como Senisse, Álvarez Garcia Abogados. 
      Estamos comprometidos en extender nuestra misión de defender y asesorar a personas y empresas que buscan sacar adelante nuestro país. Con bases sólidas en el compromiso y la profesionalidad hemos logrado convertirnos en estudio de abogados referente en la asesoría legal y queremos llegar a cada ciudad de nuestro Perú.
</p>
        </div>
    </>
  );
};

export default BannerEstudio;