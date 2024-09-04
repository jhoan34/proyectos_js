const operacion = (tipo, numero1, numero2 ) =>{                 
    //let  resultado;

    if (tipo === "suma") {
        return numero1 + numero2;
     
    } else if (tipo === "resta") {
        return  numero1 - numero2;
    }

    //return resultado; 
 
};// teniendolo asi la funcion se encarga de realizarlo la opracion y no de mostrarlo en pantalla 

const vaso = operacion("suma", 1000, 500 );
console.log(vaso);










  //parametros ()
  // dentro de una variable le puedes defninir la variable con valores como parametros de una funcion , otras variables, hacer comparacion, operadores y operaciones artimeticas
//esto es solo para definir la funcion
// lo que hace es que se puede guardar dentro de una variable para luego restornarla en una consola





