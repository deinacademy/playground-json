const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO:
    // Acceder a las propiedades:
    // - name
    // - age
}

// Taller 5.1: API https://api.got.show
const endpoint = 'api/book/events';
api.request(endpoint, show)