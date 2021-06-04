import React, {useState} from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
`;

const useCriptomoneda = (label, options) => {

    //state de nuestro custom hook
    const [state, setState] = useState('');
    
    const SelectCripto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </Select>
        </>
    );

    //retornar state, interfaz y funcion que modifica el state
    return [state, SelectCripto, setState];

}

export default useCriptomoneda;