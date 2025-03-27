import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carlos_senisse from "../assets/expertos/carlos_senisse.jpg";
import carlos_juan_senisse from "../assets/expertos/carlos_juan_senisse.jpg";
import rafael_samaniego from "../assets/expertos/rafael_samaniego.jpg";
import mariel_fernandez from "../assets/expertos/mariel_fernandez.jpg";
import alexandra_chipana from "../assets/expertos/alexandra_chipana.jpg";
import tania_rodriguez from "../assets/expertos/tania_rodriguez.jpg";
import esbet_mendez from "../assets/expertos/esbet_mendez.jpg";
import victor_espinoza from "../assets/expertos/victor_espinoza.jpg";
import christian_cerna from "../assets/expertos/christian_cerna.jpg";
import elky_villegas from "../assets/expertos/elky_villegas.jpg";
import alex_choquecahua from "../assets/expertos/alex_choquecahua.jpg";
import gustavo_juarez from "../assets/expertos/gustavo_juarez.jpg";
import victor_llanto from "../assets/expertos/victor_llanto.jpg";
import dangelo_gamero from "../assets/expertos/dangelo_gamero.jpg";
import ronny_santillan from "../assets/expertos/ronny_santillan.jpg";

const slidesDesktop = [
  { id: 1, image: carlos_senisse, title: "Carlos Senisse Anampa" },
  { id: 2, image: carlos_juan_senisse, title: "Carlos Juan Senisse Córdova" },
  { id: 3, image: rafael_samaniego, title: "Rafael Samaniego Krauss" },
  { id: 4, image: mariel_fernandez, title: "Mariel Fernandez Pantoja" },
  { id: 5, image: alexandra_chipana, title: "Alexandra Chipana Tejada" },
  { id: 6, image: tania_rodriguez, title: "Tania Rodríguez" },
  { id: 7, image: esbet_mendez, title: "Esbet Mendez" },
  { id: 8, image: victor_espinoza, title: "Víctor Espinoza" },
  { id: 9, image: victor_llanto, title: "Víctor Llanto" },
  { id: 10, image: christian_cerna, title: "Crhistian Cerna" },
  { id: 11, image: elky_villegas, title: "Elky Villegas Paiva" },
  { id: 12, image: alex_choquecahua, title: "Alex Choquecahua" },
  { id: 13, image: dangelo_gamero, title: "Dangelo Gamero" },
  { id: 14, image: ronny_santillan, title: "Ronny Santillán" },
  { id: 15, image: gustavo_juarez, title: "Gustavo Juarez" },
];

const BannerExpertos = () => {
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
    speed: 3000,
    slidesToShow: isMobile ? 1:4,
    slidesToScroll: isMobile ? 1:4,
    autoplay: true,
    autoplaySpeed: isMobile ? 0:1000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    swipe: true,
  };

  return (
    <div className="banner-expertos">
      <Slider  {...settings} className="slick-slider">
        {slidesDesktop.map((slide) => (
          <div key={slide.id} className="slick-slide">
            <div className="slide-content-expertos">
              <img
                className="banner-img-expertos"
                src={slide.image}
                alt={`Slide ${slide.id}`}
              />
              <div className="shadow-expertos">
                <h1>{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider> <br/>

<Link to='/abogados' style={{textDecoration:"none"}}>  
    <div className="button1">
             Conoce a todo el equipo {'>'}
          </div>
          </Link>
    </div>

  );
};

export default BannerExpertos;
