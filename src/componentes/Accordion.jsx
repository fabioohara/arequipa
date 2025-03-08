import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      question: "¿En qué consiste la consulta inicial con el especialista?",
      answer:
        "Es una reunión virtual o presencial de aproximadamente una hora, donde podrás llevar todas tus dudas o interrogantes sobre el caso que te preocupa. Incluso puedes llevar los documentos de tu expediente para que podamos darte la solución legal más útil para tu problema.",
    },
    {
      question: "¿Cuánto cuesta la cita con el especialista?",
      answer:
        "La cita tiene un costo mínimo de 200 soles y cubre toda la consulta, o incluso alguna asesoría posterior, si algunas de tus dudas dependen de que consigas más información o documentación, siempre que la nueva información no sea excesiva.",
    },
    {
      question: "¿Tienen experiencia en casos difíciles?",
      answer:
        "Sí, desde nuestros inicios hemos llevado constantemente la defensa legal de casos complejos, tanto por la cantidad de personas involucradas -sean agraviadas o denunciadas-, como por la cantidad de los delitos denunciados o su antigüedad. Incluso, si se encuentran fuera de Lima, estamos capacitados para llevar los casos más complejos que se nos proponen.",
    },
    {
      question: "¿A cuánto ascienden sus honorarios?",
      answer:
        "No existe un honorario predeterminado para asumir la defensa legal en un proceso, eso depende de la complejidad del caso y su duración. Sin embargo, tomamos en consideración la franqueza del cliente al contarnos los hechos al determinar los honorarios.",
    },
    {
      question:
        "¿Pueden ayudarme si no tengo mucha información del caso?",
      answer:
        "Claro que sí, en estos casos proporcionamos todas las herramientas necesarias para que tú o nosotros, por encargo tuyo, encontremos tu expediente. Luego, puedes contratar un informe legal sobre tu caso o una nueva consulta.",
    
    },
    {
        question:
          "¿Por qué debería elegir Senisse Abogados y no otro estudio?",
        answer:
          "En Senisse Abogados tenemos la misión de dar soluciones a los problemas reales de las personas. No vendemos escritos, denuncias o demandas, sino que te ofrecemos nuestro total compromiso de resolver tus problemas a través de todos los mecanismos que la ley nos autoriza.",
      
      },
      {
        question:
          "¿Pueden atender una reunión inmediatamente?",
        answer:
          "Por lo general, nuestros especialistas están en diligencias y las citas se programan con un mínimo de 24 horas de anticipación. Sin embargo, en casos de urgencia podemos atender una consulta puntual inmediatamente, a veces vía telefónica y sin ningún costo.",
      
      },
      {
        question:
          "Mi caso y yo estamos en provincia, ¿atienden reuniones virtuales?",
        answer:
          "Brindamos asesoría a nivel nacional, por lo que tenemos habilitadas todas las herramientas virtuales para atender las consultas estés donde estés.",
      
      },
      {
        question:
          "¿Siempre me atiende un abogado especialista?",
        answer:
          "En Senisse Abogados nos preocupamos de que tu asesoría sea especializada, por lo que los abogados que te atenderán siempre contarán con experiencia comprobada en casos similares.",
      
      },
      {
        question:
          "¿Me aseguran ganar mi caso?",
        answer:
          "Ningún abogado puede asegurar ganar tu caso, en el Perú hacerlo constituye además una falta ética y el abogado puede perder su colegiatura. No obstante, en nuestra firma procuramos dar soluciones prácticas a los casos, lo cual nos permite lograr los resultados esperados por nuestros clientes en la gran mayoría de los casos.",
      
      },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="icon">{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
