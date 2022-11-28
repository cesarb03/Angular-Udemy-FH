/*
    ===== Código de TypeScript =====
*/

// private: la propiedad solo va a ser visible dentro de la clase
// public: afuera de la clase alguien va a poder ver la propiedad. POR DEFECTO SON PUBLICAS
// static: voy a poder acceder a la propiedad SIN crear una instancia de la clase

// class Heroe {
//   alterEgo: string;
//   edad: number;
//   nombre: string;

//   // EL CONSTRUCTOR SE LLAMA CUANDO CREO UNA INSTANCIA DE LA CLASE
//   constructor(alterEgo: string) {
//     this.alterEgo = alterEgo // si pongo this.alterEgo usa el argumento de la instancia, si pongo el alterEgo toma el argumento del constructor
//     }
// }

class PersonaNormal {
   constructor( public nombre: string,
    public direccion: string){}

}


class Heroe extends PersonaNormal {
  // EL CONSTRUCTOR SE LLAMA CUANDO CREO UNA INSTANCIA DE LA CLASE, en este caso creo la propiedad dentro del constructor y simplifico codigo
  constructor(public alterEgo: string, public edad: number, public nombreReal: string) {
    super( nombreReal, 'NY, USA' );
}
}

const ironman = new Heroe("Iroman", 45, 'Tony');

console.log(ironman);
