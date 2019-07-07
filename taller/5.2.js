const api = require('../api/got.js');

// Herramientas
const show = (result) => {
    const castles = result.filter((castle) => castle.founder.length > 0);
    castles.forEach((castle, index) => {
        console.log(`
            Index:    ${index}
            Name:     ${castle.name}
            Location: ${castle.location}
            Founder:  ${castle.founder}
        `);
    });
}

// Taller 5.2: API https://api.got.show
const endpoint = '/api/show/castles';
api.request(endpoint, show)