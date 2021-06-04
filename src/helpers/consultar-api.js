import axios from 'axios';

export const consultarAPI = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const response = await axios.get(url);

    return(response.data.Data);
}