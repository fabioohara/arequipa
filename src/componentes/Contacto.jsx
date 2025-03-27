import React from 'react'

const Contacto = ({ visible, onClose }) => {
    if (!visible) return null;
    
    
    const handleFondoClick = (e) => {
        // si se hace clic en el fondo (y no en el contenido), cerrar
        if (e.target.classList.contains('fondo-contacto')) {
          onClose();
        }
      };
    
      return (
        <div className='fondo-contacto' onClick={handleFondoClick}>
          <div className='contacto'>
            <button onClick={onClose} className="cerrar-contacto">✕</button>
            <h2>Agenda una consulta</h2>
            <input type="text" placeholder="Nombre" className='contacto-input' />
            <input type="text" placeholder="Apellido" className='contacto-input' />
            <input type="text" placeholder="Celular" className='contacto-input'/>
            <input type="text" placeholder="Correo electrónico" className='contacto-input' />
            <div className='button1' style={{width:"120px", marginTop:"30px"}}>Enviar</div>
          </div>
        </div>
      );

}

export default Contacto