import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../services/index";

const Areas1 = () => {
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
    fetchData("categorias.areas_seccion", "link='"+link+"' and seccion_orden=1"); // Ejecutar al montar el componente
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
          <div className="areastext1_1">
            {textos.map((texto, index) => (
              <p key={index}>{texto}</p> // Mostrar cada texto en un <p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Areas1;
