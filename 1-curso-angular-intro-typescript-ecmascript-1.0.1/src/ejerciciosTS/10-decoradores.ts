

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


// los decoradores son propios de TS
// los decoradores son funciones
// los decoradores otorga propiedades (expandir o añadir funcionalidades) a las clases
// se debe habilitar "experimentalDecorators"   en tsconfig.json
// luego se debe reabrir el proyecto y reiniciar la aplicacion


function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
        return class extends constructor {
            newProperty = "new property";
            hello = "override";
    };
  }


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABCD123'

    imprimir(){
        console.log('Hola mundo');
    }
}

// el decarador se ejecuta antes que el constructor de la clase
// en este punto solo se verian las propiedades del decorador debido a que se no sea a instanciado la clase
console.log(MiSuperClase);

const miClase = new MiSuperClase();

// en este punto ya se veran las propiedades de la clase
console.log( miClase.miPropiedad)