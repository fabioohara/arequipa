import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/index";

const AgendaAreas = ({ setMostrarContacto }) => {
     const { link } = useParams();
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
          } else {
            console.error("Error: La respuesta no es un array válido", data);
          }
        } catch (error) {
          console.error("Error al obtener datos:", error);
        }
      }
    
      useEffect(() => {
       
        fetchData("categorias.areas_seccion", "link='"+link+"' and seccion_orden=3");
     
          }, [link]);

  return (
    <div className="container2 ancho65 redondeado">
   
    <div className="text-contentC">
      <h1>Agenda una consulta</h1>
      <p className="p-no-margin">Atención de forma virtual o presencial.</p>
    
      <p className="p-no-margin">a partir de S/.149*</p>
      {datos.map((dato) => (
            <h2 className="texto-blanco"  key={dato.id} >{dato.texto}</h2> 
      ))}

      <div className="button2" onClick={() => setMostrarContacto(true)}>
            Agendar una consulta {'>'}
          </div>
    
    
    </div>
    
    </div>
  )
}

export default AgendaAreas