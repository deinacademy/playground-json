// Taller 2.4: Conversiones
const conversion = (clave, valor) => {
  if (typeof valor !== "string") {
    return valor;
  }

  const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (isoDate.test(valor)) {
    return Date.parse(valor);
  }

  return valor;
};

const texto = '{"esValido": false, "calcular": 18, "fecha": "2020-04-01T03:15:32.130Z"}';
const maltrecho = JSON.parse(texto, conversion);

console.log(maltrecho);