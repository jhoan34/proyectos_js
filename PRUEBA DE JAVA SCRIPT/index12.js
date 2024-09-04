//function saludo(){
//    console.log("hola")
//}
//
//const variable = saludo;
//console.log(variable)
//
//// forma 2
//
//const saludo1 = function () {
//    console.log ("hola desde variable")
//};
//
//saludo1()

// forma 3

const saludo3 = (nombre) =>{
    console.log("hola "  + nombre);
}

saludo3( "carlos")


//parametros los valore sque se colocan dentro de la funcion
// argunros son los valores que le pasamos a la funcion cuando la invocamos


//multiples parametros

const operacion = (tipo, numero1, numero2 ) =>{
   if(tipo === "suma"){
    console.log(numero1 + numero2);
   }else if(tipo === "resta"){
    console.log(numero1 - numero2); 
   }

}

operacion("resta", 2000, 5);
