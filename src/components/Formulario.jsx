import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useCriptomoneda from '../hooks/useCriptomoneda';
import useMoneda from '../hooks/useModeda';
import { consultarAPI } from '../helpers/consultar-api';
import Mensaje from './Mensaje';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    background-color: #66a2fe;
    padding: 10px;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    //state del formulario de criptomonedas
    const [listacript, setListaCripto] = useState([]);

    const Monedas = [
        {codigo: 'USD', nombre: 'Dolar Estadounidense'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
    ];

    //Utilizar useMoneda
    const [moneda, SelectMoneda] =  useMoneda('Elige tu Moneda', Monedas);

    //utilizar criptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', listacript);

    //utilizar el mensaje
    const [mensaje, setMensaje] = useState(false);

    //ejecutar llamado a la api
    useEffect(() => {
        consultarAPI()
            .then(response => setListaCripto(response))
    }, []);

    //cuando el usuario hace submit
    const CotizarMoneda = e => {
        e.preventDefault();

        //validar si los campos estan llenos
        if(!moneda || !criptomoneda){
            setMensaje(true);
            return;
        }

        //pasar los datos al componente principal
        setMensaje(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);
    }

    return ( 
        <form
            onSubmit={CotizarMoneda}
        >

            {mensaje ? <Mensaje msj={'Por favor llene todos los campos'}/> : null}

            <SelectMoneda />

            <SelectCripto />

            <Boton 
                type="submit"
                value="calcular"
            />
        </form>
    );
}
 
export default Formulario;