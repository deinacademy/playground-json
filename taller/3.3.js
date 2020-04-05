const usuarios = {};

let usuario = 'equiman';
usuarios[usuario] = {};
usuarios[usuario].tipo = 'Administrador';
usuarios[usuario].alerta = {};
usuarios[usuario].alerta.tiempo = 30;
usuarios[usuario].alerta.tipo = 'seg';

console.log(`Tipo: ${usuarios[usuario].alerta.tiempo}`);

usuario = 'equimancho';
const alerta = {
  tiempo: 60,
  tipo: 'seg'
};
usuarios[usuario] = {
  tipo: 'Usuario',
  alerta: alerta
};

usuarios[usuario].alerta.tiempo = 10;
usuarios.equimancho.alerta.tiempo = 20;

console.log(JSON.stringify(usuarios, null, 2));