const api = require('../api/pokemon.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO: Entrar a la pagina de Pokemon API
    //      Cambiar el endpoint y acceder a las propiedades
}

// Taller 5.2: Desde API https://pokeapi.co/
const endpoint = 'location/1';
api.request(endpoint, show)