import React from 'react'
import card1 from '../assets/card1.jpg'
const Card1 = () => {
  return (
    <div class="container">
    <img class="left-image" src={card1} alt="Descripción de la imagen" />
    <div class="text-content">
      <h1 >¿Estás enfrentando un problema legal y no sabes por dónde empezar?</h1>
      <hr className='hr'/>
      <p>
      En Senisse Abogados, entendemos que los problemas legales pueden ser abrumadores. Ya sea que enfrentes una acusación penal, un conflicto familiar o una disputa comercial, estamos aquí para guiarte hacia la mejor solución.</p>
    </div>
  </div>
  )
}

export default Card1