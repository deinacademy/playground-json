const got = require('../data/got.js');

console.log('Personajes:');
console.table(got);

//Taller 4.1: Create
const descripcion = {
    name: 'Bella Ramsey',
    gender: 'Female',
    house: 'Mormonts'
};
const personaje = 'Lyanna';
//TODO: Adicionar a Lyanna a la lista de personajes con su respectiva descripcion

console.log('Create:')
console.table(got);