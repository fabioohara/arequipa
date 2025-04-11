import React from 'react'
import { Link } from "react-router-dom";

import logofooter from '../assets/logo-footer.png'
import proteccion from '../assets/proteccion.png'

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
    <li><a href="tel:+51992077639"><i className="fa fa-phone"></i>&nbsp; +51 992 077 639</a></li>
    <li><i className="fa fa-map-marker"></i>&nbsp; Av. Ejército 101 Of. 506 - Arequipa</li>

   
    <div className="redes-sociales" >
   
    <li><a className="redes" href="https://www.facebook.com/senisseabogados/" target="_blank"
    rel="noopener noreferrer"> <i className="fa fa-facebook"></i></a></li>
    <li><a className="redes" href="https://www.instagram.com/senisseabogados/" target="_blank"
    rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
    <li><a className="redes" href="https://www.tiktok.com/@senisseabogados" target="_blank"
    rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a></li>
    <li><a className="redes"  href="https://www.youtube.com/@SenisseAbogados" target="_blank"
    rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a></li>
    <li><a className="redes" href="https://www.linkedin.com/company/senisseabogados/" target="_blank"
    rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
    </div>
  

    
    
    
   
  </ul>

  <ul className="menuFooter" >
    <li>  <Link to='#' style={{textDecoration:"none"}}>Otros Servicios</Link></li>
    <li> <Link to='https://proteccionlegal.pe/' style={{textDecoration:"none"}}><img src={proteccion} alt="" width={180}/></Link></li>
   
   
  </ul>
    
     </div>
   );
}

export default Footer