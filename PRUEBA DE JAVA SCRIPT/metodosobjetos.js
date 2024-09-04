const usuario = {
    nombre: "camilo",
    edad: 27,
    amigos: ["alejandro" , "cesar" , "manuel"],
    saludo: () => {
        console.log("hola")

    },
}

// metodos propios: los objetos pueden tener metodos personalisados

usuario.saludo()



// obejct.keys nos devuelve en un arreglo las llaves o las propiedades del obejeto

const resultados = Object.keys(usuario);
console.log(resultados)


//objects values nos devuelve los valores de las propiedades

const resultados2 = Object.values(usuario)
console.log(resultados2)

// object. centruies los hace es devovelr un arreglo por cada propiedad  y valor  en el objeto

const resultados3 = Object.entries(usuario)
console.log(resultados3)