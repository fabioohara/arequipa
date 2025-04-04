import React, { useState } from 'react';

const Whastapp = ({ visible, onClose }) => {
  if (!visible) return null;

  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [departamento, setDepartamento] = useState('Lima');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFondoClick = (e) => {
    if (e.target.classList.contains('fondo-contacto')) {
      onClose();
    }
  };

  const enviarWhatsapp = () => {
    const telefonoValido = /^\d{9}$/;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nombre || !celular || !correo || !ciudad || !departamento) {
      setErrorMessage('Por favor completa todos los campos obligatorios.');
      return;
    }
  
    if (!telefonoValido.test(celular)) {
      setErrorMessage('Por favor ingresa un número de celular válido (9 dígitos).');
      return;
    }
  
    if (!emailValido.test(correo)) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }
  
    setErrorMessage(''); // limpiar mensaje de error
  
    const mensaje = `Hola, mi nombre es *${nombre}*. Mi número es *${celular}*, mi correo es *${correo}*. 
  Escribo desde *${ciudad}, ${departamento}*.`;
  
    const url = `https://wa.me/51992077639?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='fondo-contacto' onClick={handleFondoClick}>
      <div className='ws'>
        <div className='titulo-ws'>
          <p>Senisse Álvarez Abogados</p>
          <button onClick={onClose} className="cerrar-ws">✕</button>
        </div>

        <p className='pregunta'>Hola ¿Cuál es tu nombre?</p>
        <input type="text" placeholder="Nombre y apellido" className='respuesta' value={nombre} onChange={e => setNombre(e.target.value)} />

        <p className='pregunta'>¿Cuál es tu número de celular?</p>
        <input
  type="tel"
  placeholder="Celular"
  className='respuesta'
  value={celular}
  onChange={e => {
    // Solo permitir números
    const val = e.target.value.replace(/\D/g, '');
    setCelular(val);
  }}
/>
        <p className='pregunta'>¿Cuál es tu correo electrónico?</p>
        <input type="text" placeholder="Correo electrónico" className='respuesta' value={correo} onChange={e => setCorreo(e.target.value)} />

        <p className='pregunta'>¿Desde dónde nos escribes?</p>
        <div className='ws50'>
          <input type="text" placeholder="Ciudad" className='respuesta50' value={ciudad} onChange={e => setCiudad(e.target.value)} />
          <select
            name="cbo_ciudad"
            id="cbo_ciudad"
            className='respuesta50'
            style={{ marginLeft: "0px" }}
            value={departamento}
            onChange={e => setDepartamento(e.target.value)}
          >
            {/* ... opciones ... */}
            <option value="Lima">Lima</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Ancash">Ancash</option>
            <option value="Apurimac">Apurimac</option>
            <option value="Arequipa">Arequipa</option>
            <option value="Ayacucho">Ayacucho</option>
            <option value="Cajamarca">Cajamarca</option>
            <option value="Callao">Callao</option>
            <option value="Cusco">Cusco</option>
            <option value="Huancavelica">Huancavelica</option>
            <option value="Huanuco">Huanuco</option>
            <option value="Ica">Ica</option>
            <option value="Junín">Junín</option>
            <option value="La Libertad">La Libertad</option>
            <option value="Lambayeque">Lambayeque</option>
            <option value="Loreto">Loreto</option>
            <option value="Madre de Dios">Madre de Dios</option>
            <option value="Moquegua">Moquegua</option>
            <option value="Pasco">Pasco</option>
            <option value="Piura">Piura</option>
            <option value="Puno">Puno</option>
            <option value="San Martín">San Martín</option>
            <option value="Tacna">Tacna</option>
            <option value="Tumbes">Tumbes</option>
            <option value="Ucayali">Ucayali</option>
          </select>
        </div>

      

        <div className='contiene-boton'>
          <div className='button-ws' onClick={enviarWhatsapp}>
            Iniciar conversación en Whatsapp
          </div>
        </div>
        {errorMessage && (
          <div style={{ color: 'red', margin: '1rem' }}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Whastapp;
