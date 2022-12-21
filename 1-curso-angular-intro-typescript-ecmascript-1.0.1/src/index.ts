

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


// *** CLASE VS INTERFACE ****
// ambas definen las propiedades 
// la interface no se traduce a JS porque noe existen
// la clase si existe en JS
// lasc lases sirven para crear instancias
// en las interfaces no se puede definir como funcionan funciones como get, set,... 
//   en la interfaz solo se podira definir la estrutura mas no definir su implementacion


// alcance o visibilidad
// private = la propiedad solo es visible dentro de la clase
// public = la propiedad se puede ver desde otra afuera de la clase
// static = se puede acceder al valor de la propiedad sin la necesidad de instaciar el objeto
//            

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    // implementacion, se define que hace, como funciona
    imprimirNombre(){
        return this.alterEgo;
    }
}

// ejemplo creación de lo mismo que clase pero con un interfaz
interface Heroe2 {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    // no se puede definir que hace, solo como luce
    imprimirNombre: () => string;
}

const iroman = new Heroe();

console.log(iroman);