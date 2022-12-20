

console.log('Hola Mundo YO 2022 !');
console.log('sergio');

/*
    ===== Código de TypeScript =====
*/

// arreglo tipo cualquiera
let habilidadesAny = [];

//arrelo varios tipos
let habilidadesVarios: (boolean | string | number) [] = [];

//arreglo un solo tipo
let habilidaes = ['Bash','Counter','Healing'];

// la manera de hacer que un objeto sea
// LAS INTERFACES son como clases tontas, no son como clases verdaderas
// con  interrogante  ? se indica propiedad opcional
// las interfaces no existen en Javascript, por lo que no se traduce de TS a JS
// los tipos no existen en Javascript
// las interfaces son restricciones al codigo
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//objeto, generalmente constantes
// se pueden espeficicar tipos para las propiedades
// se puede colocar tipo any al objeto para que admita agregar mas propiedades
// const personaje: any = {...
// }
// la forma correcta seria mendiante interfaces
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}


personaje.puebloNatal = 'Pueblo Paleta';

habilidaes.push('cualquiera');

// imprimer en consola como tabla
console.table(personaje);