/*
    ===== Código de TypeScript =====
*/

// Funcion de tipo generica, devuelve el tipo solicitado
function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy("Hola mundo");
let soyNumero = queTipoSoy(123);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9]);
