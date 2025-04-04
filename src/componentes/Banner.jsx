import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from "../assets/slide01.jpg";
import slide02 from "../assets/slide02.jpg";
import slide01movil from "../assets/slide01-movil.jpg";
import slide02movil from "../assets/slide2-movil.jpg";

const slidesDesktop = [
  {
    id: 1,
    image: slide01,
    title: "Profesionales a tu Servicio",
    description:
      "Defendemos lo que mas valoras ahora en Arequipa. Contamos con 25 años experiencia y resultados sólidos en Lima, ahora en Arequipa y todo el Perú.",
  },
  {
    id: 2,
    image: slide02,
    title: "Profesionales a tu Servicio",
    description:
      "Tu caso es importante para nosotros, y nos comprometemos a dedicarle el tiempo y la atención necesarios.",
  },
];

const slidesMobile = [
  {
    id: 1,
    image: slide01movil,
    title: "Profesionales a tu Servicio",
    description:
    "Defendemos lo que mas valoras ahora en Arequipa. Contamos con 25 años experiencia y resultados sólidos en Lima, ahora en Arequipa y todo el Perú.",
  },
  {
    id: 2,
    image: slide02movil,
    title: "Profesionales a tu Servicio",
    description:
      "Tu caso es importante para nosotros, y nos comprometemos a dedicarle el tiempo y la atención necesarios.",
  },
];

const Banner = ({ setMostrarContacto }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const areas = [
    { id: 1, name: 'Derecho Penal',type: 'areas1' ,link:'/areas/abogados-penalistas'},
    { id: 2, name: 'Derecho Inmobiliario', type: 'areas2' ,link:'/areas/abogados-derecho-inmobiliario'},
    { id: 3, name: 'Derecho Laboral', type: 'areas3' ,link:'/areas/abogados-laborales'},
    { id: 4, name: 'Derecho Corporativo',type: 'areas1' ,link:'/areas/abogados-derecho-corporativo'},
    { id: 5, name: 'Derecho Familiar', type: 'areas2' ,link:'/areas/abogados-derecho-familiar'},
    { id: 6, name: 'Cobranzas y Controversias', type: 'areas3' ,link:'/areas/abogados-cobranzas-recuperaciones'},
    { id: 7, name: 'Derecho Tributario', type: 'areas2' ,link:'/areas/abogados-derecho-tributario'},

  
  ];

    // Función para obtener estilos dinámicos
    const getBackground = (type) => {
        switch (type) {
          case 'areas1':
            return 'linear-gradient(135deg, #cd2c31, #a22d37)';
          case 'areas2':
            return 'linear-gradient(135deg, #8e2d3b, #682d41)';
          case 'areas3':
            return 'linear-gradient(135deg, #4e2d45, #1c1f33)';
          default:
            return 'linear-gradient(135deg, #cd2c31, #a22d37)'; // Color por defecto
        }
      };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    swipe: true,
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
                <div className="mobile-shadow">
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
                <div className="shadow">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="div-rounded-banner" onClick={() => setMostrarContacto(true)}>Contactar &nbsp;{" >"}</div>
                </div>
                <img
                  className="banner-img"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}

<div className="areas-ayuda-container">
      <h2>¿En qué área necesitas ayuda?</h2>
      <div className="areas-ayuda-grid">
        {areas.map((area) => (
          <div key={area.id} className="area-item"
          style={{
            background: isMobile
              ? "linear-gradient(135deg, #cd2c31, #61161c)"
              : getBackground(area.type),
            color: "white",
            textDecoration: "none"
          }} >
            <Link to={area.link} style={{ color:"white",textDecoration:"none" }}>{area.name}</Link>
       
          </div>
        ))}
      </div>
    </div>
    </div>


  
    
    </>  );
};

export default Banner;
