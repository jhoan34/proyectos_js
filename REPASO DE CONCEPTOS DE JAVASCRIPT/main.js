// promesas: las promesas se iniciaron para crear un sustituto de los callbacks porque los callbacks 
//ejcutaban funciones tras funciones y tocaba mirar funcion en funcion para saber como era iteracion o recorrido de cada una para segun sea el bojetivo

/* */ 

function cuadradoPromise (value){
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            resolve(
                result = value * 20
            ),
            reject(()=> {
                console.log("error")
            })
        }, 1000)
        
    
    })
}

cuadradoPromise(20).then((result) => {
    console.log(result)
})


cuadradoPromise(20).catch((err) => {
    console.log(err)

})


/* poxyes Los proxies en JavaScript son objetos especiales que permiten crear un intermediario
 entre el código que los utiliza y el objeto al que están asociados. Los proxies proporcionan 
 un nivel de abstracción que permite interceptar y personalizar el comportamiento fundamental 
 de las operaciones en un objeto.

Los proxies se utilizan comúnmente para la programación defensiva, la manipulación de objetos
 y la creación de funcionalidades avanzadas. Algunas de las aplicaciones comunes de los proxies
  en JavaScript son:
*/

const persona =  {

    nombre: "",
    apellido: "",
    edad: 0

}

const manejador = {
    set(obj, prop, valor){      //El objeto Set le permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`la propiedad "${prop}" no existe  en el obejto persona`)
        }

        obj[prop] = valor
    }

}



const jon = new Proxy(persona, manejador);
jon.nombre = "jon";
jon.apellido = "mirchan";
jon.edad = 23;
jon.correo = "johanmonsalve125@gmail.com"
console.log(jon) 


/// json es und formati que sirve para conectarlos los datos que tiene el ususaio con el servidors es una forma de transferencias de datso
// mas que nada su representaciono de los datos se basan en objetos con propieddades i valores que tienen que tener comillas dobles


console.log(JSON.parse("{}")) // los que hace parse en convertir esa cadena de texto en una objeto o arreglos segun sea el dato introducido
console.log(JSON.parse("[1, 2,  3]"))

// acepta cierto tips de datos como booleanos , numeros, arreglos, objetos, null, pero otros no
 console.log(JSON.stringify([1,2,3])) /// stirngifi lo que hace es convertir en cadena de texto lo que se le presente





const position = 2;
const replacementCard = 6;
const l = [1, 2, 4, 1];
function setItem(l , position, replacementCard){
    return console.log(l.splice(0,2, replacementCard))
};
