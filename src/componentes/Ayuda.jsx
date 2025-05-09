import React from 'react';
import { Routes, Route,Link } from "react-router-dom";


const Ayuda = () => {
  const areas = [
    { id: 1, name: 'Derecho Penal',type: 'areas1' ,link:'/areas/abogados-penalistas'},
    { id: 2, name: 'Derecho Inmobiliario', type: 'areas2' ,link:'/areas/abogados-derecho-inmobiliario'},
    { id: 3, name: 'Derecho Laboral', type: 'areas3' ,link:'/areas/abogados-laborales'},
    { id: 4, name: 'Derecho Corporativo',type: 'areas1' ,link:'/areas/abogados-derecho-corporativo'},
    { id: 5, name: 'Derecho Familiar', type: 'areas2' ,link:'/areas/abogados-derecho-familiar'},
    { id: 6, name: 'Cobranzas y Controversias', type: 'areas3' ,link:'/areas/abogados-cobranzas-recuperaciones'},
    { id: 7, name: 'Derecho Tributario', type: 'areas2' ,link:'/areas/abogados-derecho-tributario'},

  
  ];

    // Función para obtener estilos dinámicos
    const getBackground = (type) => {
        switch (type) {
          case 'areas1':
            return 'linear-gradient(135deg, #cd2c31, #a22d37)';
          case 'areas2':
            return 'linear-gradient(135deg, #8e2d3b, #682d41)';
          case 'areas3':
            return 'linear-gradient(135deg, #4e2d45, #1c1f33)';
          default:
            return 'linear-gradient(135deg, #cd2c31, #a22d37)'; // Color por defecto
        }
      };

  return (
    <div className="areas-ayuda-container">
      <h2>¿En qué área necesitas ayuda?</h2>
      <div className="areas-ayuda-grid">
        {areas.map((area) => (
          <div key={area.id} className="area-item"
          style={{ background: getBackground(area.type),color:"white",textDecoration:"none" }} >
            <Link to={area.link} style={{ color:"white",textDecoration:"none" }}>{area.name}</Link>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ayuda;