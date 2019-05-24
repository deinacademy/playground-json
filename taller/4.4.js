const got = require('../data/got.js');

console.log('Personajes:');
console.table(got);

//Taller 4.4: Delete
const personaje = 'Daenerys';
//TODO: Eliminar a Daenerys de la lista de personajes

console.log('Delete:')
console.table(got);