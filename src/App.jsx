import React, { useState, useEffect, useRef } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Ayuda from "./componentes/Ayuda";
import Card1 from "./componentes/Card1";
import Card2 from "./componentes/Card2";
import Card3 from "./componentes/Card3";
import BannerMini from "./componentes/BannerMini";
import Resolucion from "./componentes/Resolucion";
import Agenda from "./componentes/Agenda";
import Map from "./componentes/Map";
import Dudas from "./componentes/Dudas";
import Footer from "./componentes/Footer";
import SubFooter from "./componentes/SubFooter";
import "font-awesome/css/font-awesome.min.css";
import whatsapp from "./assets/whatsapp.png";
import BannerEstudio from "./componentes/BannerEstudio"; // <-- Nuevo componente
import EstudioAyuda from "./componentes/EstudioAyuda";
import Mision from "./componentes/Mision";
import Expertos from "./componentes/Expertos";
import BannerExpertos from "./componentes/BannerExpertos";
import Valores from "./componentes/Valores";
import BannerMini2 from "./componentes/BannerMini2";
import Especialistas from "./componentes/Especialistas";
import Card4 from "./componentes/Card4";
import BannerAbogados from "./componentes/BannerAbogados";
import AbogadosAyuda from "./componentes/AbogadosAyuda";
import Abogados from "./componentes/Abogados";
import Area from "./componentes/Area";
import Abogado from "./componentes/Abogado";
import Publicaciones from "./componentes/Publicaciones"
import Publicacion from "./componentes/Publicacion"
import ScrollToTop from "./componentes/ScrollToTop";
function App() {
  const [mostrarContacto, setMostrarContacto] = useState(false);

  return (
    <>
      <Header setMostrarContacto={setMostrarContacto} mostrarContacto={mostrarContacto}/>
      <ScrollToTop />
      <Routes>
        {/* Ruta principal con los componentes originales */}
        <Route
          path="/"
          element={
            <>
              <Banner  setMostrarContacto={setMostrarContacto} />
              <Ayuda />
              <BannerMini />
              <Card1 />
            
              <Card2 />
              <Card3 />
              <Resolucion setMostrarContacto={setMostrarContacto} />
              <Agenda setMostrarContacto={setMostrarContacto}/>
              <Map />
              <Dudas />
            </>
          }
        />
        
        {/* Nueva ruta que muestra un nuevo componente */}
        <Route path="/estudio" element={
            <>
              <BannerEstudio />
             <EstudioAyuda/>
             <Mision/>
             <Expertos/>
            <BannerExpertos/>
            <Valores/>
            <BannerMini2/>
            <Especialistas/>
            <Card4 setMostrarContacto={setMostrarContacto}/>
            </>
          } />

            {/* Nueva ruta que muestra un nuevo componente */}
        <Route path="/abogados" element={
            <>
              <BannerAbogados />
              <AbogadosAyuda/>
              <Abogados/>
            </>
          } />

<Route path="/areas/:link" element={<Area   setMostrarContacto={setMostrarContacto} mostrarContacto={mostrarContacto}/>} />

<Route path="/abogado/:link_abogado" element={<Abogado />} />

<Route path="/publicaciones" element={<Publicaciones />} />

<Route path="/publicacion/:link_publicacion" element={
  <Publicacion key={window.location.pathname} />
} />

      </Routes>

      <Footer />
      <SubFooter />

      {/* Ícono de WhatsApp */}
      <a
        href={`https://wa.me/905452024`}
        target="_blank"
        className="whatsapp-icon"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "20px",
          zIndex: "2000",
        }}
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </>
  );
}

export default App;
