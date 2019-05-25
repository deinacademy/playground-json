// Taller 2.4: Conversiones
const texto = '{"esValido": false, "calcular": edad(), "fecha": new Date()}';
const maltrecho = JSON.parse(texto);

console.log(maltrecho);