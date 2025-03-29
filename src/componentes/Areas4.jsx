import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/index";

const Areas4 = () => {
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
    fetchData("categorias.areas_seccion", "link='"+link+"' and seccion_orden=4"); // Ejecutar al montar el componente
  }, [link]);

  // **Agrupar datos por nombre**
  const datosAgrupados = datos.reduce((acc, dato) => {
    if (!acc[dato.nombre]) {
      acc[dato.nombre] = [];
    }
    acc[dato.nombre].push(dato.texto);
    return acc;
  }, {});

  return (
    <div className="areas-1">
      {Object.entries(datosAgrupados).map(([nombre, textos]) => (
        <div key={nombre} className="areasbox1">
          <div className="areasbox1_1">
            <h2>{nombre}</h2>
          </div>
          <ul className="areastext4_1">
  {textos.flatMap((texto, indexTexto) =>
    texto.split("\n").map((parrafo, indexParrafo) => (
      <li key={`${indexTexto}-${indexParrafo}`}>{parrafo}</li>
    ))
  )}
</ul>

        
     
   
        </div>
      ))}
    </div>
  );
};

export default Areas4;
