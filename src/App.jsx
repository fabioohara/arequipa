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

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Ruta principal con los componentes originales */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Ayuda />
              <Card1 />
              <BannerMini />
              <Card2 />
              <Card3 />
              <Resolucion />
              <Agenda />
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
            </>
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
          bottom: "70px",
          right: "70px",
          zIndex: "2000",
        }}
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </>
  );
}

export default App;
