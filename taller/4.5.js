const got = require('../data/got.json');

const conversion = {};
got.forEach(actor => {
  const {
    personaje,
    ...propiedades
  } = actor;

  conversion[personaje] = propiedades;
});

console.log(conversion);