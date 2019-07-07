const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO:
    // Entrar a la pagina de Game of Thrones API
    // Cambiar el endpoint para obtener todos los Castillos
    // Acceder a las propiedades:
    // - name
    // - location
}

// Taller 5.2: API https://api.got.show
const endpoint = 'api/book/characters';
api.request(endpoint, show)