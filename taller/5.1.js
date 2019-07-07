const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    console.log(`
        Titles:  ${result.titles.join(' ,')}
        Name:    ${result.name}
        Gender:  ${result.gender}
        Culture: ${result.culture}
        House:   ${result.house}
    `);
}

// Taller 5.1: API https://api.got.show
const endpoint = 'api/book/characters/Jon%20Snow';
api.request(endpoint, show);