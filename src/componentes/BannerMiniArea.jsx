import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import comillas from '../assets/comillas.png'
import {getData} from "../services/index"


const BannerMiniArea = () => {
  const { link } = useParams();
  const [datos, setDatos] = useState([]);

  // Función para obtener datos y actualizar el estado
  async function fectchData(area,filtro) {
      try {
        let data = await getData(area,filtro); // Obtener datos desde la API
    
        // Verificar si la respuesta ya es un objeto JSON
        if (typeof data === "string") {
          data = JSON.parse(data); // Solo convertir si es un string
        }
    
        if (Array.isArray(data)) {
          setDatos(data); // Almacenar en el estado
        
         
        } else {
          console.error("Error: La respuesta no es un array válido", data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    

  useEffect(() => {
  
    fectchData("datos.testimonio_area","link='"+link+"'"); // Ejecutar al montar el componente
  }, [link]);


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
        {datos.map((dato, index) => (
          <div key={dato.id} className="slick-slide-mini">
            <div className="slide-content-mini">
             <b>
                <p style={{fontWeight:"lighter",fontStyle:"oblique"}}>{dato.texto}</p>
                <h4>{dato.testigo}<br />{dato.cargo}</h4>
                </b>
            
              <img className="banner-mini-img" src={dato.foto1} alt='' />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default BannerMiniArea;
