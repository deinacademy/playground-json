const got = require('../data/got.json');
const saveFile = require('../api/saveFile');

console.log('Personajes:');
console.table(got);

//Taller 4.3: Update
const personaje = 'Jon Snow';
got[personaje].casa = 'Targaryens';

console.log('Update:');
console.table(got);

saveFile.toJSON(got);