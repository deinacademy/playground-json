const got = require('../data/got.json');

console.log('Personajes:');
console.table(got);

//Taller 4.2: Read
const personaje = 'Tyrion';
//TODO:Buscar a Tyrion

console.log('Read:');
console.log(`Actor:  ${resultado.actor}`);
console.log(`Genero: ${resultado.genero}`);
console.log(`Casa:   ${resultado.casa}`);