const edad = () => 18;

// Taller 2.3: Conversiones
const maltrecho = {
    esValido: false,
    calcular: edad(),
    fecha: new Date()
}
const texto = JSON.stringify(maltrecho);

console.log(texto);