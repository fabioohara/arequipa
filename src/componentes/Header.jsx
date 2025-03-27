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
        <ul className="menu">
          <li><a href="/">INICIO</a></li>
          <li><a href="/estudio">EL ESTUDIO</a></li>
          <li><a href="/abogados">ABOGADOS</a></li>
          <li 
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <a href="#" className="dropdown-toggle">
              ÁREAS DE PRÁCTICAS &nbsp; <span className='rotated-text-align'>{' >'}</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="/areas/1">DERECHO PENAL</a></li>
              <li><a href="/areas/2">DERECHO INMOBILIARIO</a></li>
              <li><a href="/areas/3">DERECHO LABORAL</a></li>
              <li><a href="/areas/4">DERECHO CORPORATIVO</a></li>
              <li><a href="/areas/5">DERECHO DE FAMILIA</a></li>
              <li><a href="/areas/6">COBRANZAS Y CONTROVERSIAS</a></li>
            </ul>
          </li>
          <li><a href="/publicaciones">PUBLICACIONES</a></li>
        </ul>
      </nav>

      <div className='div-rounded'  onClick={() => setMostrarContacto(true)}>CONTACTAR &nbsp;{'>'}</div>
    </div>
    </>
  );
};

export default Header;
