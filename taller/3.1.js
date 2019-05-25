//Taller 3.1: Propiedades
const persona = {
    nombre: "Homer J Simpson",
    edad: 39,
    residencia: {
        direccion: "Avenida Siempreviva 742",
        ciudad: "Springfield"
    },
    esEmpleado: true,
    hijos: ["Bart", "Lisa", "Maggie"]
}

console.log(`Nombre:       ${persona.nombre}`);
console.log(`Edad:         ${persona.edad}`);
console.log(`Dirección:    ${persona.residencia.direccion}`);
console.log(`Ciudad:       ${persona.residencia.ciudad}`);
console.log(`Es empleado:  ${persona.esEmpleado ? 'Si' : 'No'}`);
console.log(`Hijos:        ${persona.hijos}`);