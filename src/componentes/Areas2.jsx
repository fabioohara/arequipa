import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { getData } from "../services/index";

const Areas2 = () => {
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
    fetchData("categorias.abogado_resumen", "link='"+link+"'"); // Ejecutar al montar el componente
  }, [link]);



  return (
    <>
    <div className="areas-1">
      
        <div  className="areasbox2">
          <div className="areasbox2_1">
            <h2>Nuestros Especialistas</h2>
          </div>
          <div className="areastext2_1">

          {datos.map((dato) => (
            <div  key={dato.id} className="abogado-resumen">
              <div className="resumen1">
                {dato.foto1 && (
            <img  className="resumen-img" src={dato.foto1}  />
            )}
            </div>
            <div className="resumen2">
              <h2 >{dato.nombre}</h2> 
              <h3  >{dato.cargo}</h3> 
              <p  >{dato.bio}</p> 
              <Link to={`/abogado/${dato.id}`} style={{textDecoration:"none"}}>
              <div className="button5">Leer Más {'>'}</div>
              </Link>
              </div>
             </div>
            ))}
          </div>
        </div>
     
    </div>


</>
  );
};

export default Areas2;
