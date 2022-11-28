/*
    ===== Código de TypeScript =====
*/

interface SuperHereo {
  name: string;
  edad: number;
  //   direccion: { calle: string; pais: string; ciudad: string };
  direccion: Direccion;
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHereo = {
  name: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.name + ", es de " + this.direccion.ciudad + " " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
