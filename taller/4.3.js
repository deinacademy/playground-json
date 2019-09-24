const got = require('../data/got.json');

console.log('Personajes:');
console.table(got);

//Taller 4.3: Update
const personaje = 'Jon Snow';
//TODO:Actualizar la casa de Jon Snow a Targaryens

console.log('Update:');
console.table(got);
