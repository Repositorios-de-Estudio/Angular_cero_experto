

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/



// desestructuracion sirve para crear variables para propiedades de interes
// se desestrutura un objeto con llaves {}, se desestrustura un arreglo con llaves cuadradas []

interface Detalle {
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalle;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheerman',
        anio: 2015
    }
}

// ejemplo sin desestruturacion
console.log('Volumen :', reproductor.volumen);
console.log('Segundo :', reproductor.segundo);
console.log('Cancion :', reproductor.cancion);
console.log('Autor :', reproductor.detalle.autor);


const autor = 'Fulano';

// ejemplo con desestruturacion
const { volumen: vol, segundo: seg, cancion: can, detalle: det } = reproductor;
const { autor: autor2 } = det;

//ejemplo con desestructuracion dentro de la desestructuracion
// se le da un alias al autor (autorDetalle) para que no choque con autor Fulano
//const {volumen, segundo, cancion, detalle: {autor: autorDetalle}} = reproductor;


// console.log('Volumen :', vol);
// console.log('Segundo :', seg);
// console.log('Cancion :', can);
// console.log('Autor :', autor2);

// en la desestruturacion de arreglos la posicion es lo importante
// si solo se quisiera uno de los elementos se deja el espacio en blanco y se pona la coma
// const [ , , p3] = dbz;
const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [ p1, p2, p3] = dbz;

console.log('Personjae 1: ', p1);
console.log('Personjae 1: ', p2);
console.log('Personjae 1: ', p3);