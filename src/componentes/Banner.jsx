import React, { useState, useEffect } from "react";
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
      "Tu caso es importante para nosotros, y nos comprometemos a dedicarle el tiempo y la atención necesarios.",
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
      "Tu caso es importante para nosotros, y nos comprometemos a dedicarle el tiempo y la atención necesarios.",
  },
  {
    id: 2,
    image: slide02movil,
    title: "Profesionales a tu Servicio",
    description:
      "Tu caso es importante para nosotros, y nos comprometemos a dedicarle el tiempo y la atención necesarios.",
  },
];

const Banner = () => {
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
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    swipe: true,
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
                  <div className="div-rounded-banner">Contactar &nbsp;{" >"}</div>
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
    </div>
  );
};

export default Banner;
