import React from 'react'
import card2 from '../assets/card2.jpg'

const Card2 = () => {
  return (
    <div className="container3">
   <div className='movil-reverse'>
    <div className="text-contentR">
      <h1>Tu tranquilidad es nuestra prioridad</h1>
      <hr className='hrR' />
      <div className='div-image2'> <img className="right-image" src={card2} alt="Descripción de la imagen" /></div>
      <p>
      Nos especializamos en derecho penal, familiar, inmobiliario, corporativo, laboral, y de cobranzas.
</p><p>
Sabemos que cada cliente tiene necesidades únicas. Desde proteger tus bienes hasta defender tus derechos en casos urgentes, nuestro equipo está aquí para escucharte, orientarte y actuar rápidamente. Tu caso es nuestra misión.
      </p>
    </div>
    <div className='div-image'> <img className="right-image" src={card2} alt="Descripción de la imagen" /></div>
    </div>
  </div>
  )
}

export default Card2