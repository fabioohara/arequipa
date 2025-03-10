import React from 'react'
import mision from '../assets/mision.jpg'
import target from '../assets/target.png'
import eye from '../assets/eye.png'

const Mision = () => {
  return (
    <div className="container-mision" >
        <div className='misionmini'>
        <h1 >Nuestra Misión y Visión</h1>
        <hr className='hr'/>
        </div>
    <img className="mision-image" src={mision} alt="Descripción de la imagen" />
    <div className="text-content-mision">
        <div className="misioncol">
        <img src={target} alt="Misión" /> 

    <div>
    <h1 >Misión:</h1>
      <p>
      Senisse Abogados ofrece servicios legales de alta calidad en Arequipa, enfocándose en soluciones personalizadas, éticas e innovadoras para el éxito de sus clientes.
      </p>
      </div>
      </div>
      <div className="misioncol">
      <img src={eye} alt="Misión" /> 
      <div><h1 >Visión:</h1>
      <p>
      Senisse Abogados aspira a ser un referente nacional en servicios legales, reconocido por su excelencia, innovación, ética y compromiso con sus clientes.
      </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Mision