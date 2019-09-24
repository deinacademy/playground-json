const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO:
    // Entrar a la pagina de Game of Thrones API
    // Cambiar el endpoint para obtener todos los Castillos
    // Filtrar el resultado con los castillos que tengan nombre de fundador
    // Acceder a las propiedades:
    // - name
    // - location
    // - founder
}

// Taller 5.2: API https://api.got.show
const endpoint = '/api/show/castles';
api.request(endpoint, show);
