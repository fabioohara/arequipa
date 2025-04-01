import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getData} from "../services";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stars from '../assets/starts.svg'


const Testimoniales = () => {

 const { link_abogado } = useParams();
    const [datos, setDatos] = useState([]);
  
    // Función para obtener datos y actualizar el estado
    async function fetchData(area, filtro) {
      try {
        let data = await getData(area, filtro); // Obtener datos desde la API
  
        // Verificar si la respuesta ya es un objeto JSON
        if (typeof data === "string") {
          data = JSON.parse(data); // Solo convertir si es un string
        }
  
        if (Array.isArray(data)) {
          setDatos(data); // Almacenar en el estado
          console.log(data);
        } else {
          console.error("Error: La respuesta no es un array válido", data);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
  
    useEffect(() => {
     
      fetchData("datos.testimonios", "link_abogado='"+link_abogado+"'");
        
        }, [link_abogado]);


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
    {datos.length > 0 ? (
           <div key={datos[0].id} className="areasbox1a">
                  <div className="areasbox1a_1">
                    <h2>Testimoniales</h2>
                  </div>
                  <div className="areastext4a_1" >
                 
     
    <div className="banner-abogado">
   
      <Slider {...settings} className="slick-slider-mini">
      {datos.map((abogado) => (
          <div className="slick-slide-mini">
            <div className="slide-content-mini">
             
                <p>{abogado.texto}</p>
                <img className="banner-abogado-img" src={stars}  />
                <h1>{abogado.testigo}</h1>
               
            
          
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
        
        </div>
    ):null}
    </>
  );
};

export default Testimoniales;
