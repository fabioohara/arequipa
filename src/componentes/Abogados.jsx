import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import {getData} from "../services";


const groupByRegion = (abogados) => {
  return abogados
    .sort((a, b) => a.region.localeCompare(b.region) || a.nombre.localeCompare(b.nombre)) // <- cambio aquí
    .reduce((acc, abogado) => {
      if (!acc[abogado.region]) {
        acc[abogado.region] = [];
      }
      acc[abogado.region].push(abogado);
      return acc;
    }, {});
};
  

  const Abogados = () => {
 
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
     
      fetchData("datos.abogados", "");
   
        }, []);



     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    const groupedAbogados = groupByRegion(datos);
  
    return (
      <>
        <div className="abogados">
        
  
          {Object.entries(groupedAbogados).map(([region, abogados]) => (
            <div key={region} className="region-section">
                  <div className="rojo">
            <p>{!isMobile ? 'Nuestros Abogados en ' :''}{region}</p>
          </div>
             
  
              <div className="tarjetas">
              {abogados.map((abogado) => (
  <div key={abogado.id} className="tarjeta blanco">
    {abogado.foto1 && (
      <img src={abogado.foto1} alt={abogado.nombre} className="tarjetaImg" />
    )}
    <div className="tarjetaP">
      <p>{abogado.nombre}</p>
      <Link to={`/abogado/${abogado.link_abogado}`} style={{textDecoration:"none"}}>
  <div className="button3">Ver Más {'>'}</div>
</Link>
    </div>
  </div>
))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Abogados;
  

