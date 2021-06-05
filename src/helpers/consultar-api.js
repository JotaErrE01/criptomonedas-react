import axios from 'axios';

export const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const response = await axios.get(url);

    return(response.data.Data);
}

export const consultarAPICompare = async (moneda, criptomoneda) => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const response = await axios.get(url);

    return(response.data.DISPLAY[criptomoneda][moneda]);
}