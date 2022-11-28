/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ["Juan", "Pedro", "Raul"];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string; // ?: significa que es opcional
}

const personaje: Personaje = {
  nombre: "Strike",
  hp: 12,
  habilidades: ["Juan", "Pedro", "Raul"],
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);
