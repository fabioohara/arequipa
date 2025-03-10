import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abogados from "../assets/lawyers.jpg";
import abogadosmini from "../assets/lawyersmini.jpg";


const slidesDesktop = [
  {
    id: 1,
    image: abogados,
    title: "Nuestros Abogados",
   
  },
  {
    id: 2,
    image: abogados,
    title: "Nuestros Abogados",
   
},
];

const slidesMobile = [
  {
    id: 1,
    image: abogadosmini,
    title: "Nuestros Abogados",
    
},
  {
    id: 2,
    image: abogadosmini,
    title: "Nuestros Abogados",
   
},
];

const BannerAbogados = () => {
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
  );
};

export default BannerAbogados;