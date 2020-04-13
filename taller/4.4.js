const got = require('../data/got.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(got);

//Taller 4.4: Delete
const personaje = 'Daenerys';
delete got[personaje];

console.log('Delete:');
console.table(got);

saveFile.toJSON(got);