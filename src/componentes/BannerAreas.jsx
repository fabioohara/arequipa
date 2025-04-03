import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  

  return (
    <div className="banner-areas">
      
      
          {datos.map((dato) => (
           
              <div key={dato.id} className="slide-content-areas">
               
             
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
           
          ))}
      
   
    </div>
  );
};

export default BannerAreas;