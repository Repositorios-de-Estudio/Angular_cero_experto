

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/



// funcion codigo en JS
// no se diferencia de sumar a concatenar
function sumarJS(a, b){
    return a + b;
}


// funcion codigo en TS
function sumar(a: number, b:number): number{
    return (a + b);
}


// funcion suma como funcion de flecha tradicional JS
const sumarFlechaJS = (a, b) => {
    return a + b;
}


// funcion suma como funcion de flecha con tipos
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// primero van los parametros obligatorios
// para especificar un valor predeterminado se usa =
// parametro opcional con ?
function multiplicar (numero: number, otroNumero?: number, base: number = 2): number{
    return numero*base
}


const resultadoJS = sumarJS('sergio', 'perez');


const resultadoSumar = sumar(909, 10);

// aca espeficica el numero y otro numero su resultado es 5*2 = 10
const resultado1 = multiplicar(5, 10);


// aca espeficica solo numero, otro es opcional y la base tiene valor predeterminado, su resultado es 5*2 = 10
const resultado2 = multiplicar(5);


// para espeficicar la base se deben colocar todos los parametros, su resultado es 5*10 = 50
const resultado3 = multiplicar(5, 0, 10);


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;

}


// funcion que no retorna nada
function curar( personaje: PersonajeLOR, curarX: number): void{
    personaje.pv +=  curarX;


    console.log(personaje);


    //esto seria para codigo en JS, en TS no es necesario
    return undefined;
}



const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida', this.pv);
    }
}


curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();

// color AZUL en salida es Number, color NEGRO en String
//console.log(resultado1);
//console.log(resultado2);
//console.log(resultado3);
//console.log(resultado1.toString());
//console.log(resultado2.toString());
//console.log(resultado3.toString());