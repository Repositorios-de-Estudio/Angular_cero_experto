import { calcularISV, Producto } from "./06-desestruturacion-funcion";


console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


// antes de importar se debe ir y exportarlo
// la sistaxis es la desestruturacion del arcchivo
// se pueden importar varias cosas del archivo con la misma linea de import
// CUIDADO al importar la funcion se ejecuta el archivo por lo que el console.log tambien se imprime


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];


const [total, isv] = calcularISV(carritoCompras);


console.log('Total --: ', total);
console.log('ISV --: ', isv);