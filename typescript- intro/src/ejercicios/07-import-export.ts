import { Producto, calISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
  {
    descripcion: "Iphone x",
    precio: 10,
  },
  {
    descripcion: "Iphone 8",
    precio: 30,
  },
];

const [total, isv] = calISV(carritoCompras)

console.log(`El precio total es ${total} y el impuesto es ${isv}`)