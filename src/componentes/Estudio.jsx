import { useState } from 'react'

import '../App.css'
import Dudas from './Dudas'
import "font-awesome/css/font-awesome.min.css";
import whatsapp from '../assets/whatsapp.png';
function Estudio() {
  

  return (
    <>
   
  
  
     <Dudas/>
    
     <a href={`https://wa.me/905452024`} target="_blank" className="whatsapp-icon" style={{position:'fixed',bottom:'40px',right:'30px',zIndex:'2000'}}>
     <img src={whatsapp} alt="WhatsApp" />
       </a>
  </>
  );
}

export default Estudio
