//named imports


//import { nombre as nombreImportado, obtenerPosts } from "./carrito.js";
//console.log(obtenerPosts)
//console.log(nombreImportado)



// namessapce es para importar todos los datos de una sola ve

import * as datos from "./carrito.js"
console.log(datos.obtenerPosts)


//default import

import obtener from "./carrito.js";
console.log(obtener())

//empty imports
//carga toddo el codigo pero sin hacer ningun objeto

import "./carrito.js"