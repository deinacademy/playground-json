const api = require('../api/pokemon.js');

// Herramientas
const show = (result) => {
    const abilities = result.abilities.map((item) => item.ability.name);
    console.log(abilities);
    abilities.forEach((element, index) => {
        console.log(`Habilidad ${index}: ${element}`);
    });
}

// Taller 5.2: Desde API https://pokeapi.co/
const endpoint = 'pokemon/ditto/';
api.request(endpoint, show)