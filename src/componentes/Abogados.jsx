import React, { useState, useEffect } from "react";

import carlos_senisse from "../assets/abogados/carlos_senisse.jpg";
import carlos_juan_senisse from "../assets/abogados/carlos_juan_senisse.jpg";
import carlos_nunez from "../assets/abogados/carlos_nunez.jpg";

import rafael_samaniego from "../assets/abogados/rafael_samaniego.jpg";
import mariel_fernandez from "../assets/abogados/mariel_fernandez.jpg";
import alexandra_chipana from "../assets/abogados/alexandra_chipana.jpg";
import tania_rodriguez from "../assets/abogados/tania_rodriguez.jpg";
import esbet_mendez from "../assets/abogados/esbet_mendez.jpg";
import victor_espinoza from "../assets/abogados/victor_espinoza.jpg";
import christian_cerna from "../assets/abogados/christian_cerna.jpg";
import elky_villegas from "../assets/abogados/elky_villegas.jpg";
import alex_choquecahua from "../assets/abogados/alex_choquecahua.jpg";
import gustavo_juarez from "../assets/abogados/gustavo_juarez.jpg";
import victor_llanto from "../assets/abogados/victor_llanto.jpg";
import dangelo_gamero from "../assets/abogados/dangelo_gamero.jpg";
import ronny_santillan from "../assets/abogados/ronny_santillan.jpg";
import katherine_alvarez from "../assets/abogados/katherine_alvarez.jpg";


const abogados = [
    { id: 1, image: carlos_senisse, title: "Carlos Senisse Anampa" ,region:"Lima"},
    { id: 2, image: carlos_juan_senisse, title: "Carlos Juan Senisse Córdova" ,region:"Lima"},
    { id: 3, image: carlos_nunez, title: "Carlos Nuñez" ,region:"Lima"},
    { id: 4, image: rafael_samaniego, title: "Rafael Samaniego Krauss",region:"Lima" },
    { id: 5, image: mariel_fernandez, title: "Mariel Fernandez Pantoja" ,region:"Lima"},
    { id: 6, image: alexandra_chipana, title: "Alexandra Chipana Tejada" ,region:"Lima"},
    { id: 7, image: tania_rodriguez, title: "Tania Rodríguez" ,region:"Lima"},
    { id: 8, image: esbet_mendez, title: "Esbet Mendez",region:"Lima" },
    { id: 9, image: victor_espinoza, title: "Víctor Espinoza" ,region:"Lima"},
    { id: 10, image: victor_llanto, title: "Víctor Llanto" ,region:"Lima"},
    { id: 11, image: christian_cerna, title: "Crhistian Cerna",region:"Cajamarca" },
    { id: 12, image: elky_villegas, title: "Elky Villegas Paiva",region:"Trujillo" },
    { id: 13, image: alex_choquecahua, title: "Alex Choquecahua",region:"Tacna"  },
    { id: 14, image: dangelo_gamero, title: "Dangelo Gamero" ,region:"Lima"},
    { id: 15, image: ronny_santillan, title: "Ronny Santillán" ,region:"Lima"},
    { id: 16, image: gustavo_juarez, title: "Gustavo Juarez" ,region:"Lima"},
    { id: 17, image: katherine_alvarez, title: "Katherine Álvarez" ,region:"Arequipa"},

  ];

  const groupByRegion = (abogados) => {
    return abogados
      .sort((a, b) => a.region.localeCompare(b.region) || a.title.localeCompare(b.title)) // Ordenar por región y luego por nombre
      .reduce((acc, abogado) => {
        if (!acc[abogado.region]) {
          acc[abogado.region] = [];
        }
        acc[abogado.region].push(abogado);
        return acc;
      }, {});
  };
  
  

  const Abogados = () => {
     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    const groupedAbogados = groupByRegion(abogados);
  
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
                    <img src={abogado.image} alt="" className="tarjetaImg" />
                    <div className="tarjetaP">
                      <p>{abogado.title}</p>
                      <div className="button3">Ver Más {'>'}</div>
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
  

