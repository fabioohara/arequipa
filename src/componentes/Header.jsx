import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logosa.png";
import Contacto from "./Contacto";

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
    <Contacto visible={mostrarContacto} onClose={() => setMostrarContacto(false)}/>
    <div className="header">
      <img src={logo} alt="Logo"  className="logo" />

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
       
          <li><a href="/">Inicio</a></li>
          <li><a href="/estudio">El Estudio</a></li>
          <li><a href="/abogados">Abogados</a></li>
          <li 
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <a href="#" className="dropdown-toggle">
              Áreas de Prácticas &nbsp; <span className='rotated-text-align'>{' >'}</span>
            </a>
          
            <ul className="dropdown-menu">
              <li><a href="/areas/abogados-penalistas">Derecho Penal</a></li>
              <li><a href="/areas/abogados-derecho-inmobiliario">Derecho Inmobiliario</a></li>
              <li><a href="/areas/abogados-laborales">Derecho Laboral</a></li>
              <li><a href="/areas/abogados-derecho-corporativo">Derecho Corporativo</a></li>
              <li><a href="/areas/abogados-derecho-familiar">Derecho de Familia</a></li>
              <li><a href="/areas/abogados-cobranzas-recuperaciones">Cobranzas y Controverias</a></li>
              <li><a href="/areas/abogados-derecho-tributario">Derecho Tributario</a></li>

            </ul>
            
          </li>
          <li><a href="/publicaciones">Publicaciones</a></li>

          <li className="only-movil"><a href="/proteccion">Senisse Protección Legal</a></li>
          <li className="only-movil"><a href="/sedes">Sedes</a></li>

        </ul>
        </div>
      </nav>

      <div className='div-rounded'  onClick={() => setMostrarContacto(true)}>CONTACTAR &nbsp;{'>'}</div>
    </div>
    </>
  );
};

export default Header;
