import React from 'react'
import card2 from '../assets/card2.jpg'

const Agenda = ({ setMostrarContacto }) => {
  return (
    <div className="container2">
   
    <div className="text-contentC">
      <h1>Agenda una consulta</h1>
      <p className="p-no-margin">a partir de S/.149*</p>
      <div className="button2" onClick={() => setMostrarContacto(true)}>
            Agendar una consulta {'>'}
          </div>
      <p className="p-no-margin">El costo de la consulta será descontado de nuestros honorarios si decides contratarnos para tu caso.</p>
    </div>
   
  </div>
  )
}

export default Agenda