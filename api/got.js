const fetch = require('node-fetch');

const server = 'https://api.got.show';

const rest = async (endpoint) => {
  let response = await fetch(`${server}/${endpoint}`);
  let data = await response.json();
  return data;
};

const request = (endpoint, callback) => {
  rest(endpoint)
    .then((result) => {
      callback(result);
    })
    .catch((error) => console.error(error.message));
};

module.exports = {
  request,
};