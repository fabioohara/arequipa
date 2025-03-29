import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getData} from "../services/index"


const BannerAreas = ({ setMostrarContacto }) => {
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
    
      fectchData("categorias.area","link='"+link+"'"); // Ejecutar al montar el componente
    }, [link]);


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
    <div className="banner-areas">
      {isMobile ? (
        <Slider {...settings} className="slick-slider">
        
           {datos.length > 0 && (
            <div className="slick-slide">
              <div className="mobile-slide-content">
              
                {datos[0].imagen && (
                  <img className="mobile-banner-img-studio" src={datos[0].imagen} alt={datos[0].nombre} />
                )}
                
                <div className="mobile-shadow-estudio">
                  <h1>{datos[0].titulo}</h1>
                  <p>{datos[0].texto}</p>
                </div>
              </div>
            </div>
          )}
          
        </Slider>
      ) : (
        <Slider {...settings} className="slick-slider-areas">
          {datos.map((dato) => (
            <div key={dato.id} className="slick-slide-areas">
              <div className="slide-content-areas">
               
             
          {dato.imagen && (
            <img  className="banner-img-areas" src={dato.imagen} alt={dato.nombre} />
          )}
                 <div className="shadow-estudio-areas">
                  <h1>{dato.titulo}</h1>
                    <p>{dato.texto}</p>  
                    <div className="button4" onClick={() => setMostrarContacto(true)}>
            Agendar una consulta {'>'}
          </div>          
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default BannerAreas;