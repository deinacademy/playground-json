global.imprimir = function imprimir() {
  console.log('Estoy imprimiendo');
}

const metodo = 'imprimir';
global[metodo]();