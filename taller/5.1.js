const api = require('../api/pokemon.js');

// Herramientas
const show = (result) => {
    console.log(`ID:     ${result.id}`);
    console.log(`Name:   ${result.name}`);
    console.log(`Region: ${result.region.name}`);
}

// Taller 5.1: Desde API https://pokeapi.co/
const endpoint = 'location/1';
api.request(endpoint, show)