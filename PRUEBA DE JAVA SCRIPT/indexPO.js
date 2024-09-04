const personas = [ " carlos" , "rafael", "estefania" , "rodrigo", "gema", "diana", "rafael",  45, 89, 78];
//map nos permite ejecutar una fiuncion por cada elemneto y crear un nuevo arereglo en base a los resultados de esua funcion
//const resultado = personas.map((persona) => {
 //   return persona.toUpperCase()

//})
//console.log(resultado)

//

const nombres4Letras = personas.filter((persona) => {
    if (persona.length === 4 ){
        return persona;
    }
});

console.log(nombres4Letras)


//La principal diferencia entre map() y filter() es que map() transforma cada elemento del arreglo original, mientras que filter() solo devuelve los elementos que cumplen una condición determinada.

//Otras diferencias entre los dos métodos incluyen:

//map() siempre devuelve un nuevo arreglo, incluso si el arreglo original no tiene elementos. filter(), por otro lado, puede devolver un arreglo vacío si no hay elementos que cumplan la condición.
//map() no puede modificar el arreglo original, mientras que filter() puede hacerlo.
//Conclusión

//map() y filter() son dos métodos de arreglo poderosos que se pueden utilizar para realizar una variedad de tareas. La elección de cuál usar depende de las necesidades específicas de su aplicación.

//.includes() nos permite saber si dentro de un arreglo se encuentra un elemnto

console.log(personas.includes("maria"))





// every() nos permite ejecutar un condicional sobra cada elemneto y nos devuelve true si todos los
//elementos cumpliero con la condicion
const caja = personas.every((persona,index ) => {
    if(typeof persona === "string"){
        console.log(index);
        return true;
    } else {
        return false ;
    }
})

//console.log(caja, index)

// some() nos permite ejecutar un condicional sobra cada elemneto y nos devuelve true si alguno de los
//elementos cumpliero con la condicion

const caja2 = personas.some ((persona) => {
    if(typeof persona !== "string"){
        return true;
    } else {
        return false ;
    }
})

console.log(caja2)

