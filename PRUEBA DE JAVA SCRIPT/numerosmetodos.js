//tofixed() nos perimete especificar cuantos decimales va tener el numero


const numero = 3.1215789856451231231456879;
console.log(numero.toFixed(8)) 


//.parseint () inantea transforma una valor a un entero

//const numero1 = parseInt(prompt("escribe un numero"));
//const numero2 = parseInt(prompt("escribe un numero"));
//console.log(numero1 + numero2 );


// parsefloat permite que los valores tengan decimale
//const numero3 = parseFloat(prompt("escribe un numero"));
//const numero4 = parseFloat(prompt("escribe un numero"));
//console.log(numero1 + numero2 );


//Math.random() permite que genere un numeero al azar
 const mesa = Math.random();
 console.log(mesa);


// math.floor() redondea el numero hacai abajo

console.log(Math.floor(10.56))

// math.ceil() redondea el numero hacai arriba

console.log(Math.ceil(10.56))

// math.round() redondea el numero mas cercano

console.log(Math.round(10.56))

// 

const azar = Math.random()
console.log(Math.floor(azar * 101))



// operador spread permite toamr los elementos de un arreglo u objeto y expandirlos en otro sitio

const frutas = ["mazana" , "pera" , "piña" , "melon"]
const comidafavorita =["pizza", "sushi" ,  ...frutas]
console.log(comidafavorita)



// parametro rest

const registrarUsuario = (nombre, correo, ...datosAdicoinales) => {
    console.log(nombre, correo, ...datosAdicoinales);

}

registrarUsuario("alejandro", "johanmonsalve125@gmail" , 28 , "españa" );



// destructuracion de objetos; nos permite obtener los elemntos o propiedades de un arreglo u objeto y guardarlos en una variables


const amigos = ["camilo" , "cesar" , "manuel"];
const [primeramigo, segundoamigo, terceramigo ]= amigos

console.log(segundoamigo)


const persona = {
    nombre: "carlos",
    edad: 27,
    pais: "mexico",
};

const mostrarEdad = (nombre , edad) =>{
    console.log(nombre + " tiene " + edad + " años" )
}

mostrarEdad(persona.nombre , persona.edad)