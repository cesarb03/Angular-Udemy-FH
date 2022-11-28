/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 40,
  segundo: 20,
  cancion: "dell",
  detalles: {
    autor: "Ed sheran",
    anio: 2015,
  },
};

const autor = "Vilma Palma";

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: aut, anio } = detalles; //autor: aut le asigna el nombre aut, se usa porq ya hay otra variable autor declarada globalmente

// console.log(`El volumen es: ${volumen}`);
// console.log(`En el segundo: ${segundo}`);
// console.log(`La cancion es: ${cancion}`);
// console.log(`Detalles de autor: ${aut}`);

// DESTRUCTURACION DE ARREGLOS

const dbz: string[] = ["Guku", "Veggeta", "Trunks"];
// const [p1,p2, p3] = dbz;
const [, , p3] = dbz;

// console.log(`Personaje 1: ${p1}`)
// console.log(`Personaje 2: ${p2}`)
console.log(`Personaje 3: ${p3}`);
