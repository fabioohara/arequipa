import React from 'react'

const Card4 = ({setMostrarContacto}) => {
  return (
    <div className="container-red gradient">
   
    <div className="text-contentD">
      <h2>Especialistas en Todas las Áreas del Derecho</h2>
    <p>Permítenos ofrecerte la tranquilidad que mereces</p>
    <div className="button2" onClick={() => setMostrarContacto(true)}>
            Agendar una consulta {'>'}
          </div>
    </div>
   
  </div>
  )
}

export default Card4