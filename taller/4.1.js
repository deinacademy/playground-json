const got = require('../data/got.json');

console.log('Personajes:');
console.table(got);

//Taller 4.1: Create
const descripcion = {
    actor: 'Bella Ramsey',
    genero: 'Female',
    casa: 'Mormonts'
};
const personaje = 'Lyanna';
got[personaje] = descripcion;

console.log('Create:')
console.table(got);