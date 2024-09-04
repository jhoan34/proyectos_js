

const nombres = ["arturo", "andres," , "alejandro" , "roberto", "adrian", "antonio" , "angel"];



//ciclo for
// repite el bloque de codigo mientras se cumpla la condicion
// expresion 1 se ejecuta ua¿na sola vez antes de comnezar a repetir el bloque del codigo
// expresion2: una condicion, mientras se cumpla se ejecutara al bloque de codigo.
// expresion3: esta expersion se ejecuta siempre y despues de que se ejecute el bloque de codigo


//for (let numero = 0; numero < nombres.length; numero++) {
  //  console.log(nombres[i]);(nombres[numero]);
//}

// sentencia break


for (let i = 0; i < nombres.length; i++){
    if(nombres[i][0] !== "a"){
        console.log("alto hay un nombre que no empieza por la letra A");
        console.log(nombres[i] + " no empieza por la letra A ")
        break; // romper la ejecucion de un ciclo
    } // lo que hace el codigo es ejctarlo en cada uno de los elemnetos del arreglo la condicion y si cumple con la  condicion hace todo el proceso que esta ahi

    console.log(nombres[i]);

}


// continue


const invitados =[ "camilo", "christian," , "alejandro" , "jorge", "adrian", "antonio" , "angel"]

console.log("lista de personas invitadas")

for(let i = 0; i < invitados.length; i++) {
    if (invitados[i] === "jorge"){
        continue;

    }

    console.log(invitados[i])

}

// ciclo foreach es un metodo de los arreglos que podemos usar para recorrer los elementos.

const personas = ["camilo", "andrea" , "osok"]
personas.forEach((persona, index) => {
    console.log(`Hola ${persona} (${index})`);
});


//ciclo for in : nos permite recorrer propiedades de un objeto

const persona1 = {
    nombre: "carlos",
    edad: 27,
    correo: "correo@gmail.com",

};

for(propiedad in persona1){
    persona1[propiedad] = "";
}

console.log(persona1);


const red = document.head.children;
console.log(red);

//for(elemento of etiquetas){
  //  console.log(elemento);
//}


[...red].forEach((elemento) => {
    console.log(elemento);
})



