const colores = ["rojo", "verde", "azul"];


console.log(colores.length)



// .toString()
// nos permite transformar un arreglo a una cadena de texto


//document.body.innerHTML = colores.toString()


// .join() nos permite transformar un arreglo a una cadena de texto y separar cada elemento


console.log(colores.join("-"))


// .sort nos permite ordenar arreglos de una cadena de texto ed forma alfabetica

const letras = ["a" , "e", "b" , "d", "c"];

console.log(letras.sort());


// reverse


const letras1 = ["a" , "e", "b" , "d", "c"];

console.log(letras1.reverse());


//  .concat() nos permite juntar dos arreglos en uno


const arreglo1 = [1,2,3];
const arreglo2 = ["a ", "b ","c "];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3)

// push


const colores23 = ["rojo", "verde", "azul" ];
colores23.push("negro")

console.log(colores23)


colores23.pop()
console.log(colores23)


const dias = ["lunes", "martes" , "miercoles" , "jueves", "viernes"]
const diaEliminado = dias.shift() // eliminar el primer objeto del arreglo
console.log(dias[0]);

// unshift agrgar un elemnto en el arreglo para corre el resto de lugar

dias.unshift("carlos")
console.log(dias)

//splice es para eliminar valores de arreglos donde quiera y tambien sirve para agregar

const amigos = ["alejandro", "cesar", "manuel"];
console.log (amigos.splice(1, 2,)) 

//console.log(amigos)

//slice nos permite copiar una parete del arreglo
//.slice


//.indexOF si caundo referancias el elemnto t no da el index o mejor dicho da nu -1 significa que no esta el elemento ahi en ese arreglo

const personas = [ " carlos" , "rafael", "estefania" , "rodrigo", "gema", "diana", "rafael"];
//console.log (personas.indexOf("estefania"))
//console.log (personas)



// .foreach nos permite ejecutar una funcion por cada elemento


//personas.forEach((persona, index) => {
  //console.log(`Hola ${persona} (${index})`);
//});

// .find nos permite recorree un arreglo y devuelve el primer elemetos que retornemos
const resultado = personas.find((persona) => {
    if (persona[0] === "e"){
        return persona;
    }

})

console.log(resultado)


