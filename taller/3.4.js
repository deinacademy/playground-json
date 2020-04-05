const numeros = {
  1: 'Uno',
  2: 'Dos',
  3: 'Tres',
}

const buscar = (valor) => {
  return numeros[valor] || 'Cero';
};

console.log(buscar(5));