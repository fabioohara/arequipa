import React from 'react'
import e1 from '../assets/especialistas/e1.jpg'
import e2 from '../assets/especialistas/e2.jpg'
import e3 from '../assets/especialistas/e3.jpg'
import e4 from '../assets/especialistas/e4.jpg'
import e5 from '../assets/especialistas/e5.jpg'
import e6 from '../assets/especialistas/e6.jpg'



const especialidades = [
  { id: 1, image: e1, title:`Derecho Penal`,type: 'areas1' },
  { id: 2, image: e2, title: "Derecho Civil e Inmobiliario",type: 'areas2' },
  { id: 3, image: e3, title: "Derecho Laboral Empresarial",type: 'areas3' },
  { id: 4, image: e4, title: "Derecho Corporativo" ,type: 'areas1'},
  { id: 5, image: e5, title: "Derecho de Familia" ,type: 'areas2'},
  { id: 6, image: e6, title: "Derecho Cobranzas",type: 'areas3' },
];

const getBackground = (type) => {
    switch (type) {
      case 'areas1':
        return 'linear-gradient(135deg, #cd2c31, #a22d37)';
      case 'areas2':
        return 'linear-gradient(135deg, #8e2d3b, #682d41)';
      case 'areas3':
        return 'linear-gradient(135deg, #4e2d45, #1c1f33)';
      default:
        return 'linear-gradient(135deg, #cd2c31, #a22d37)'; // Color por defecto
    }
  };

const Especialistas = () => {
  return (
    <>
    <div className="especialistas">
    <div className='titulo2'>
   <h2>Especialistas en Todas las Áreas del Derecho</h2>
   <hr className='hrV'/>
   <p>Con un equipo de expertos en múltiples disciplinas, Senisse Abogados ofrece asesoría en áreas como derecho penal, civil, laboral, corporativo, inmobiliario, familiar, y cobranzas. No importa la complejidad de tu situación, tenemos el conocimiento y la experiencia para brindarte la mejor solución.</p>
   </div>
   <div className="tarjetas"> 
   {especialidades.map((especialidad, index) => (
   
          <div key={especialidad.id} className="tarjeta"  style={{ background: getBackground(especialidad.type) }}>
            <img src={especialidad.image} alt="" className='tarjetaImg'/>
            <div className='tarjetaP'>
                  <p>{especialidad.title}</p>
                  </div>
        
          </div>
         
        ))}
        </div>
   </div>
   </>
  )
}

export default Especialistas