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
//TODO: Adicionar a Lyanna a la lista de personajes con su respectiva descripcion

console.log('Create:');
console.table(got);
