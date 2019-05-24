const api = require('../api/pokemon.js');

// Herramientas
const show = (result) => {
    console.log(result);
    //TODO: Acceder a las propiedades:
    //- id
    //- name
    //- region.name
}

// Taller 5: Desde API https://pokeapi.co/
const endpoint = 'location/1';
api.request(endpoint, show)