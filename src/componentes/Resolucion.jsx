import React from 'react'

const Resolucion = ({setMostrarContacto} ) => {
  return (
    <div className="resolucion-container">
    <div className="bloque-a">
      <h2>¿Cómo resolver tu caso legal?</h2>
      <p>Te guiamos de manera fácil y rápida para que tomes el control de tu situación legal.</p>
      <div className="button1" onClick={() => setMostrarContacto(true)}>
            Agendar una consulta {'>'}
          </div>
    </div>
    <div className="bloque-b">
      <div className="step">
        <span className="number">1</span>
        <div className="content">
          <h3>Agenda tu consulta:</h3>
          <p>Reserva una consulta con uno de nuestros abogados para discutir tu caso.</p>
        </div>
      </div>
      <div className="step">
        <span className="number">2</span>
        <div className="content">
          <h3>Recibe una evaluación personalizada:</h3>
          <p>Te presentamos un plan detallado con las mejores opciones legales.</p>
        </div>
      </div>
      <div className="step">
        <span className="number">3</span>
        <div className="content">
          <h3>Actuamos para resolver tu caso:</h3>
          <p>Defendemos tus intereses con profesionalismo y dedicación hasta obtener resultados.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Resolucion