import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import {getData} from "../services";
import Testimoniales from "./Testimoniales"
const Abogado = () => {
    const { id } = useParams();
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
     
      fetchData("datos.abogado", "id="+id);
        
        }, [id]);

        const renderTextoConViñetas = (texto) => {
            if (!texto) return null;
          
            let titulo = null;
            let contenido = texto;
          
            if (texto.includes(':')) {
              [titulo, contenido] = texto.split(':');
            }
          
            const items = contenido
              .split('.')
              .map(item => item.trim())
              .filter(item => item.length > 0);
          
            return (
              <div>
                {titulo && <p><strong>{titulo.trim()}:</strong></p>}
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          };

          const bioRef = useRef(null);
const especialidadesRef = useRef(null);
const testimonialesRef = useRef(null);
const contactoRef = useRef(null);
          
const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
          {datos.length > 0 ? (
      <>
      <div className="abogado">
      <div className="abogado-inner">
        <img className="abogado-img" src={datos[0].foto1} alt={datos[0].nombre}  />
      
     
      <div>
      <h2 className="abogado-nombre">{datos[0].nombre}</h2>
   <div className="bhorizontal">
  <div className="button22" onClick={() => scrollTo(bioRef)}>Biografía</div>
  <div className="button22" onClick={() => scrollTo(especialidadesRef)}>Especialidades</div>
  <div className="button22" onClick={() => scrollTo(testimonialesRef)}>Testimoniales</div>
  <div className="button22" onClick={() => scrollTo(contactoRef)}>Contactar</div>
</div>
      </div>
      </div>
        </div>

      
     
        <div key={datos[0].id}  ref={bioRef} className="areasbox1a">
          <div className="areasbox1a_1">
            <h2>Biografía</h2>
          </div>
          <ul className="areastext4a_1">
          {datos[0].bio}
</ul>

        </div>

        <div key={datos[0].id} ref={especialidadesRef} className="areasbox1a">
          <div className="areasbox1a_1">
            <h2>Especialidades</h2>
          </div>
          <ul className="areastext4a_1">
          {renderTextoConViñetas(datos[0].especialidad)}
         
</ul>

        </div>

        <Testimoniales  ref={testimonialesRef} />

        <div key={datos[0].id}  ref={contactoRef} className="areasbox1a">
          <div className="areasbox1a_1">
            <h2>Contactar</h2>
          </div>
          <div className="areastext4a_1">
          <form className="formulario">
  <div className="form-row">
    <input type="text" placeholder="Nombre" />
    <input type="text" placeholder="Apellido" />
  </div>
  <div className="form-row">
    <input type="text" placeholder="Celular" />
    <input type="email" placeholder="Correo Electrónico" />
  </div>
  <div className="form-textarea">
    <textarea placeholder="Consulta" rows="6" />
  </div>
  <div className="form-submit">
    <button type="submit" className="button1">Contactar </button>
  </div>
</form>
</div>

        </div>
          <br />
          <br />
      </>
    ) : (
      <p>Cargando datos del abogado...</p>
    )}
    </div>
  )
}

export default Abogado