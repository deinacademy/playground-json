const got = require('../data/got.json');

console.log('Personajes:');
console.table(got);

//Taller 4.4: Delete
const personaje = 'Daenerys';
delete got[personaje];

console.log('Delete:');
console.table(got);
