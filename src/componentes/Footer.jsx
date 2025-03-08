import React from 'react'
import logofooter from '../assets/logo-footer.png'
const Footer = () => {
 return (
     <div className="footer">
       <img className="logoFooter" src={logofooter} alt="" style={{width:'17%'}} />
     
       <ul className="menuFooter" >
    <li><a href="#">Inicio</a></li>
    <li><a href="#">El Estudio</a></li>
    <li><a href="#">Abogados</a></li>
    <li><a href="#">Áreas de Prácticas</a></li>
    <li><a href="#">Publicaciones</a></li>
  </ul>

  <ul className="menuFooter" >
    <li><i className="fa fa-phone"></i>&nbsp; 905452024</li>
    <li><i className="fa fa-facebook"></i>&nbsp; Senisse Abogados</li>
    <li><i className="fa fa-map-marker"></i>&nbsp; Avenida Reducto 861, Of. 303, Miraflores</li>
   
  </ul>
    
     </div>
   );
}

export default Footer