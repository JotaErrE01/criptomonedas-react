import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import imagen from './cryptomonedas.png';
import { consultarAPICompare } from './helpers/consultar-api';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  font-weight: 700;
  text-align: left;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');

  //state del resultado 
  const [resultado, setResultado] = useState({});

  //state del spinner
  const [cargando, setCargando] = useState(false);

  useEffect(() => {

    if(!moneda) return;

    //consultar la api
    consultarAPICompare(moneda, criptomoneda)
      .then(response => setResultado(response));

    setCargando(true);

    setTimeout(() => {
      setCargando(false);
    }, 2000);

  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="Imagen Crypto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />

        {cargando ? 
          <Spinner /> :

          <Cotizacion 
            resultado={resultado}
          />
        }

      </div>
    </Contenedor>
  );
}

export default App;
