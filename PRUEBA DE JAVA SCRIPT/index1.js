let pais,persona32,fecha;
pais ="mexico"
console.log( pais )
const resultado = 4 + 4;
const celular1 = "huawei";
const celular2 = "samsung";
const celularcompleto = celular1 + celular2;
console.log( celularcompleto );
console.log( resultado );

const mayorQue = 6 > 5;
console.log(mayorQue);

const persona = {
    nombre: "carlos",
    edad: 27,
    carro: {
        marca:"boomer",
        color: "negro"
    },
};

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.carro.marca)

function hola() {
    console.log("hola")
}

hola()

// operadores de aritmeticos
const resultado89 = 78 + 45;
let numero = 1;
numero++;
console.log(numero)
console.log (resultado89)
// operadores de asignacion
let numero9 = 10
numero9 *= 30;

console.log(numero9)

// operadores de comparacion

const resultado23 = 20 > 56 //false
console.log(resultado23)

// oprador ternario sirve para condicionales
const cama = 7 > 10 ? "el primer valor es mayor que el segundo" : "el segundo es mayor que el primero";
console.log (cama)

//operadores logicos

const nombre = "carlos";
const edad = 16;
const tieneEntrada = true;

const permitirAcceso = edad >= 18 && tieneEntrada ; //&& ese simbolo es para hacer varias comprabaciones en la misma linea de codigo dentro de una sola variable
console.log("acceso permitido al concierto:   "  + permitirAcceso);

//oprador OR

const nombre1 = "camilo";
const edad1 = 16;
const tieneEntrada1 = true;
const tienePermiso1 = false;

const permitirAcceso1 = (edad1 >= 18 && tieneEntrada1) || (tienePermiso1 && tieneEntrada1)  ; //&& ese simbolo es para hacer varias comprabaciones en la misma linea de codigo dentro de una sola variable
console.log("acceso permitido al concierto:   "  + permitirAcceso1)

//arregolos

const amigos = [ "manuel", "miguel", "cesar" ] // para nombrar a una persona se inicia desde los numero 0
console.log(amigos[0]);

const colores =[]
colores[0] = "rojo"
colores[1] = "verde"
colores[2] = "blue"
colores[3] = "amarilo"

console.log("el arreglo colores tiene: "  + colores.length + " colores");
 //length es para dsaber el numero de elmentos que tiene el arreglo

colores.push("azul")
console.log(colores)


const persona44 = {
    nombre: "carlos",
    edad: 27,
    correo: "johanmonsalve125@gmail.com",
    suscripciones: {
        web: true,
        correo1: true,

    },

    coloresFavoritos: ["negro", "rojo"],
    saludo: function (){
        alert("hola"); // para acceder dentro de una funcion se llama metodos y para que se muestre toca nombrar la propiedad o variable para que de muestre
    
    },


};

console.log(persona44["correo"])

persona44.ropa = "adiddas";

console.log(persona44)

const nombre55 = "camilo";
const edad55 = 27;
const pais55 = "mexico"

{}
("las persona es ${nombre} tiene ${edad} y es de ${pais"};