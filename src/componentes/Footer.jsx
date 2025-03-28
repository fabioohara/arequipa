import React from 'react'
import { Link } from "react-router-dom";

import logofooter from '../assets/logo-footer.png'
const Footer = () => {
 return (
     <div className="footer">
       <img className="logoFooter" src={logofooter} alt="" style={{width:'17%'}} />

       <ul className="menuFooter" >
    <li><Link to='/' style={{textDecoration:"none"}}>Inicio</Link></li>
    <li><Link to='/estudio' style={{textDecoration:"none"}}>El Estudio</Link></li>
    <li><Link to='/abogados' style={{textDecoration:"none"}}>Abogados</Link></li>
    <li><Link to='/areas/1' style={{textDecoration:"none"}}>Áreas de Prácticas</Link></li>
    <li><Link to='/publicaciones' style={{textDecoration:"none"}}>Publicaciones</Link></li>
  </ul>

  <ul className="menuFooter" >
    <li><i className="fa fa-phone"></i>&nbsp; +51 992 077 639</li>
    <li><i className="fa fa-facebook"></i>&nbsp; Senisse, Álvarez Garcia Abogados</li>
    <li><i className="fa fa-map-marker"></i>&nbsp; Av. Ejercito 101 Of. 506 - Arequipa</li>
   
  </ul>
    
     </div>
   );
}

export default Footer