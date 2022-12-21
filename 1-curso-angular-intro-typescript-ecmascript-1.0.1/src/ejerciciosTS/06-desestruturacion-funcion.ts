import { transform } from "typescript";


console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


interface Producto {
    desc: string;
    precio: number;
}


const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}


const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350
}

// calcular impuesto sobre venta
function calcularISV(productos: Producto[]): [number, number]{
    
    let total1 = 0;
    let total2 = 0;


    // codigo sin desestruturar
    productos.forEach( (prod) => {
        total1 += prod.precio;
    })


    //codigo con desestruturar
    productos.forEach( ({precio}) => {
        total2 += precio;
    })

    return [total2, total2*0.15];
}

const articulos = [telefono, tableta];

// leer retorno de la funcion con desestruturacion [total, total*0.15]
const [ total, isv ] = calcularISV(articulos);



console.log('Total: ', total);
console.log('ISV: ', isv);