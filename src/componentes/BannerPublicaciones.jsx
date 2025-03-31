import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import {getData} from "../services";
import publi from "../assets/publi.png"

const BannerPublicaciones = () => {
    const navigate = useNavigate();
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
     
      fetchData("datos.publicaciones", "");
   
        }, []);



  return (
    <>
    <div className='banner-limpio'>
        <img src={publi} alt="" className="img-limpio" />
        <div className='div-limpio'> <h1 className="titulo-limpio">Publicaciones</h1></div>
       
    </div>

    <div className='articulos'><h1>Artículo más reciente</h1></div>
    {datos.length > 0 ? (
    <div className='articulo-reciente'>
<div className='texto-articulo'>
<h1  onClick={() => navigate('/publicacion/'+datos[0].link_publicacion)}>{datos[0].titulo}</h1>
<p  onClick={() => navigate('/publicacion/'+datos[0].link_publicacion)}>{datos[0].contenido}</p>
 <Link to={`/publicacion/${datos[0].link_publicacion}`}  className="link-articulo">Leer más</Link>
</div>

<img src={datos[0].banner} alt="" className='img-articulo' onClick={() => navigate('/publicacion/'+datos[0].link_publicacion)}/>
    </div>
     ) : (
        <p>Cargando datos ...</p>
      )}
    <div className="container">
    {datos.map((dato) => (
  
  <div className="card"  key={dato.id}>
    <img src={dato.banner} alt="" className='img-card'  onClick={() => navigate('/publicacion/'+dato.link_publicacion)}/>
    <div className='card-text'>
    <h1 onClick={() => navigate('/publicacion/'+dato.link_publicacion)}>{dato.titulo}</h1>
    <hr className='card-hr'/>
    <Link to={`/publicacion/${dato.link_publicacion}`} className="link-articulo">Leer más</Link>
    </div>
   
  </div>
      ))}
  </div>
    </>
  )
}

export default BannerPublicaciones