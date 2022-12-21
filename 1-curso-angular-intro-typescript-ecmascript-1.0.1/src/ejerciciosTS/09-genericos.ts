

console.log('Hola Mundo YO 2022 ! Sergio ****');


/*
    ===== Código de TypeScript =====
*/


// <T> se usa cualquier letra dentro de < > para denotar que el argumento es del tipo del que es
function queTipoSoy<T>(argumento: T){
    return argumento;
}



let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

// si se necesita se explicito en el tipo
let soyExplicito = queTipoSoy<number>(100);

