

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/



// desestructuracion sirve para crear variables para propiedades de interes

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
const {volumen: vol, segundo: seg, cancion: can, detalle: det} = reproductor;
const {autor: autor2} = det;

//ejemplo con desestructuracion dentro de la desestructuracion
// se le da un alias al autor (autorDetalle) para que no choque con autor Fulano
//const {volumen, segundo, cancion, detalle: {autor: autorDetalle}} = reproductor;


console.log('Volumen :', vol);
console.log('Segundo :', seg);
console.log('Cancion :', can);
console.log('Autor :', autor2);
