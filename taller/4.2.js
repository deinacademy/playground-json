const got = require('../data/got.json');

console.log('Personajes:');
console.table(got);

//Taller 4.2: Read
const personaje = 'Tyrion';
const resultado = got[personaje];

console.log(`Read:
Actor:  ${resultado.actor}
Genero: ${resultado.genero}
Casa:   ${resultado.casa}`);
