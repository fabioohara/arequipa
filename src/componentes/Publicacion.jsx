import React, {useRef, useState, useEffect } from "react";
import { useNavigate,Link  } from "react-router-dom";

import { useParams } from "react-router-dom";
import {getData} from "../services";
const Publicacion = () => {
        const navigate = useNavigate();
        const topRef = useRef(null);

    const { link_publicacion } = useParams();
    
    const [datos, setDatos] = useState([]);
    const [datos2, setDatos2] = useState([]);

    useEffect(() => {
        if (datos.length > 0) {
          const anchor = document.getElementById("top-marcador");
          if (anchor) {
            anchor.scrollIntoView({ behavior: "auto" });
          }
        }
      }, [datos]);

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
      
    
            async function fetchData(area, filtro,destino) {
                try {
                  let data = await getData(area, filtro); // Obtener datos desde la API
            
                  // Verificar si la respuesta ya es un objeto JSON
                  if (typeof data === "string") {
                    data = JSON.parse(data); // Solo convertir si es un string
                  }
            
                  if (Array.isArray(data)) {
                    if(destino==1){
                        setDatos(data);
                    }else{
                        setDatos2(data);
                    } // Almacenar en el estado
                   
                  } else {
                    console.error("Error: La respuesta no es un array válido", data);
                  }
                } catch (error) {
                  console.error("Error al obtener datos:", error);
                }
              }
            
              useEffect(() => {
               
                fetchData("datos.publicaciones", "link_publicacion='"+link_publicacion+"'",1);
                fetchData("datos.publicaciones_top", "link_publicacion not like '"+link_publicacion+"'",2);
                  }, [link_publicacion]);
    
                  useEffect(() => {
                    // Solo hace scroll cuando ya hay contenido nuevo
                    if (datos.length > 0) {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'auto' });
                      }, 50); // Espera breve para asegurar render completo
                    }
                  }, [datos2]);

  return (
    <>
    <div id="top-marcador" style={{ position: "relative", top: "-80px" }}></div>
      {datos.length > 0 ? (    
<div ref={topRef} className='publicacion' key={datos[0].id}>
<div className='columna1'>
    <h1>{datos[0].titulo}</h1>
<img className="img-publicacion" src={datos[0].banner} alt="" />
<div className='texto-publicacion'>
    <div className='atribucion'>
Nota escrita por {datos[0].nombre}.
<hr className='hr-publicacion'/>
    </div>
    <p>
    {datos[0].contenido}
    </p>
</div>
</div>
<div className='columna2'>
    <h2>Artículos Populares</h2>
    {datos2.map((dato2) => (
  <div
    className="card2"
    key={dato2.titulo}
    onClick={() => navigate('/publicacion/' + dato2.link_publicacion)}
    style={{ cursor: 'pointer' }}
  >
    <img src={dato2.banner} className="img-card" alt="" />
    <h3>{dato2.titulo}</h3>
    <span className="link-articulo">Leer más</span>
  </div>
))}
</div>
</div>
 ) : (
    <p>Cargando publicación...</p>
  )}
    </>
  )
}

export default Publicacion