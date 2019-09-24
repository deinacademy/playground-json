const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO:
    // Acceder a las propiedades de Jon Snow:
    // - titles
    // - name
    // - gender
    // - culture
    // - house
}

// Taller 5.1: API https://api.got.show
const endpoint = 'api/book/characters/Jon%20Snow';
api.request(endpoint, show);
