/*
    ===== Código de TypeScript =====
*/

export interface Producto {
  descripcion: string;
  precio: number;
}

const telefono: Producto = {
  descripcion: "Galaxy A1",
  precio: 200,
};

const tablet: Producto = {
  descripcion: "Tabelet VAN",
  precio: 300,
};

export const calISV = (productos: Producto[]): [number,number] => {
  let total = 0;
  // USANDO DESTRUCTURACION, SINO SERIA ((producto) => {total+=producto.precio})
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.15];
};

const articulos = [telefono, tablet];

const [total, tISV] = calISV(articulos);

console.log(`El total es ${total} y el impuesto es ${tISV}`);
