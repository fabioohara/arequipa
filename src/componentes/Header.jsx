import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logosa.png";
import { useNavigate,Link  } from "react-router-dom";
import Whastapp from "./Whatsapp";

const Header = ({ setMostrarContacto, mostrarContacto }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar el dropdown si el mouse se mueve fuera
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

 
  return (
    <>
    <Whastapp visible={mostrarContacto} onClose={() => setMostrarContacto(false)}/>
    <div className="header">
    <Link to="/" onClick={() => setIsOpen(false)}>
      <img src={logo} alt="Logo"  className="logo" />
</Link>
      {/* Botón de hamburguesa para dispositivos móviles */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navbar con estado abierto/cerrado */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="menu-parent">
      
        <ul className="menu">
          <div className="contenedor-cerrar">
          <button className="cerrar-menu" onClick={() => setIsOpen(false)}>✕</button>
          </div>
       
          <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link to="/estudio" onClick={() => setIsOpen(false)}>El Estudio</Link></li>
          <li><Link to="/abogados" onClick={() => setIsOpen(false)}>Abogados</Link></li>
          <li 
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <a href="#" className="dropdown-toggle">
              Áreas de Prácticas &nbsp; <span className='rotated-text-align'>{' >'}</span>
            </a>
          
            <ul className="dropdown-menu">
              <li><Link to="/areas/abogados-penalistas" onClick={() => setIsOpen(false)}>Derecho Penal</Link></li>
              <li><Link to="/areas/abogados-derecho-inmobiliario" onClick={() => setIsOpen(false)}>Derecho Inmobiliario</Link></li>
              <li><Link to="/areas/abogados-laborales" onClick={() => setIsOpen(false)}>Derecho Laboral</Link></li>
              <li><Link to="/areas/abogados-derecho-corporativo" onClick={() => setIsOpen(false)}>Derecho Corporativo</Link></li>
              <li><Link to="/areas/abogados-derecho-familiar" onClick={() => setIsOpen(false)}>Derecho de Familia</Link></li>
              <li><Link to="/areas/abogados-cobranzas-recuperaciones" onClick={() => setIsOpen(false)}>Cobranzas y Controverias</Link></li>
              <li><Link to="/areas/abogados-derecho-tributario" onClick={() => setIsOpen(false)}>Derecho Tributario</Link></li>

            </ul>
            
          </li>
          <li><Link to="/publicaciones" onClick={() => setIsOpen(false)}>Publicaciones</Link></li>

          <li className="only-movil"><Link to="https://proteccionlegal.pe/" onClick={() => setIsOpen(false)}>Senisse Protección Legal</Link></li>
          <li className="only-movil"><Link to="/sedes" onClick={() => setIsOpen(false)}>Sedes</Link></li>

        </ul>
        </div>
      </nav>

      <div className='div-rounded'  onClick={() => setMostrarContacto(true)}>CONTACTAR &nbsp;{'>'}</div>
    </div>
    </>
  );
};

export default Header;
