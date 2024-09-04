



class Usuario {
    tipo = "usuario";

    constructor(nombre, apellido){
        this.nombre = nombre //this es para guadar el valor que viende de parte de new
        this.apellido = apellido

    }
    obtenerMetodoComplteo(){// metodos es una funcion puesta en un objeto
        console.log("obteniendo datos....");
        return this.nombre  +   this.apellido; 
    }

}


const usuario1 = new Usuario ("carlos", "jimenez")
const obtenerMetodoComplteo = usuario1.obtenerMetodoComplteo();

console.log(obtenerMetodoComplteo)
