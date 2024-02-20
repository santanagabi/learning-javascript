//  axios e assincrono -> nao acontece instantaneamente
//  retorna uma Promise
const axios = require('axios');
const URL = `https://swapi.dev/api/people`;

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;

    try {
        //  aguarda ate que os dados sejam obtidos
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('DEU RUIM!', error);
        // se algo der errado, lanca o erro para ser tratado externamente
        throw error; 
    }
}

module.exports = {
    obterPessoas
}

//  funcao principal para usar a funcao obterPessoas
// async function fetchData() {
//     try {
//         // aguarda ate que a funcao obterPessoas termine
//         const resultado = await obterPessoas('r2');
//         console.log('resultado', resultado);
//     } catch (error) {
//         console.error('Erro ao obter pessoas:', error);
//     }
// }

// fetchData();
