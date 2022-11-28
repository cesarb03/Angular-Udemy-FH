/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]; // ? significa q la propiedad es opcional, en este caso porq no todos los pasajeros tienen hijos
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}

function impPasajeros (pasajero: Pasajero) {

    const cuantosHijos = pasajero.hijos?.length || 0; // ? me sirve para q no genere error js al no encontrar hijo (? opcional). Como el 0 le gana a undefine setea el 0 cuando no hay hijos

    console.log(cuantosHijos)
}

impPasajeros(pasajero1)