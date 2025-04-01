import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.getElementById("top-anchor");
    if (el) {
      // Esperamos un poco para asegurarnos que el DOM esté listo
      setTimeout(() => {
        el.scrollIntoView({ behavior: "auto" }); // o "smooth" si quieres
      }, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
