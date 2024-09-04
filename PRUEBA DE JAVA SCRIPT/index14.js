// global scope o varaibles globales
// -las variables declaradas fuera de una funcion
// podemos acceder a ellos desde culaquier parte del codigo
// podemos usar const, let , var.

var nombre = "carlos"


const saludo = () => {
    console.log("hola " + nombre);

    nombre = "camilo"
    console.log("el nuevo nombre es: " + nombre)
}

saludo()

// local scope o varaibles locales
// -las variables declaradas dentro de una funcion
// podemos acceder a ellos desde dentro de una funicion


var letras = (nombre1) => {
    var numero =  nombre1.length; // la variable local solo se puede usar dentro de una una funcion, es  local

    console.log (nombre1 + " tiene " + numero + " letras " );

}

letras("camilo")

// block scope o varaibles bloque
// -las variables declaradas con const o let dentro de un bloque {}
// podemos acceder a ellas dentro del blque

const edad = 19
if (edad >= 18 ){
    const accesoPermitido = true;
    console.log(accesoPermitido)
}

console.log(accesoPermitido)