import styled from 'styled-components';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Mensaje = ({msj}) => (
    <MensajeError>
        {msj}
    </MensajeError>
);

 
export default Mensaje;