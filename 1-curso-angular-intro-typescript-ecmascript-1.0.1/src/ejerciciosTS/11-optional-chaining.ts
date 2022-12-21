

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


// encadenamiento opcional

interface Pasajero {
    nombre: string;
    hijos?: string[];
}



const pasajero1: Pasajero = {
    nombre: 'Sergio'
}


const pasajero2: Pasajero = {
    nombre: 'Amiel',
    hijos: ['Natalia', 'Gabriel']
}


// colocando el opcional ? intenta evaluar la expresion y con or logico || si no retorna 0
function imprimeHijos (pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}


imprimeHijos(pasajero2);
imprimeHijos(pasajero1);