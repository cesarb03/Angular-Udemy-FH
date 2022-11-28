/*
    ===== Código de TypeScript =====
*/

function suma(a: number, b: number): number {
  return a + b;
}

const sumaFlecha = (a: number, b: number): number => {
  return a + b;
};

// Argumentos: (obligatorios, opcionales, con un valor por defecto)
const multiplicar = (
  numero: number,
  otroNumero?: number,
  base: number = 2
): number => {
  return numero * base;
};

// const resultado = suma(10, 20);
// const resultado2 = sumaFlecha(10, 20);
// const resultado3 = multiplicar(2, 4, 10);

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

interface PersonajeX {
  name: string;
  pv: number;
  mostrarHP: () => void;
}

const curar = (personaje: PersonajeX, curarX: number): void => {
  personaje.pv += curarX;
  console.log(personaje);
};

const nuevoPersonaje: PersonajeX = {
  name: "Strike",
  pv: 50,
  mostrarHP() {
    console.log("Puntos de vida:", this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
