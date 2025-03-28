import React from 'react'
import BannerAreas from './BannerAreas'
import BannerMiniArea from './BannerMiniArea'
import Areas1 from './Areas1'
import Areas2 from './Areas2'
import AgendaAreas from './AgendaAreas'
import Areas4 from './Areas4'

const Area = ({ setMostrarContacto, mostrarContacto }) => { 
  return (
    <>
       <BannerAreas  setMostrarContacto={setMostrarContacto} mostrarContacto={mostrarContacto}/> 
       
       <BannerMiniArea/>
       <Areas1/>
       <Areas2/>
       <AgendaAreas  setMostrarContacto={setMostrarContacto} mostrarContacto={mostrarContacto}/>
       <Areas4/>
    </>
 
  )
}

export default Area