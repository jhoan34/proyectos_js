

//const saludo = () => {
//    console.log("hola");
//
//};
//let id
////const iniciar = () => {
//    console.log("iniciando timer")
//  /  id = setTimeout(saludo , 5000)
////}
//
//const stop = ( ) => {
//    console.log( "parando timer")
//    clearTimeout(id)
//
//    
//}

//window.setInterval 

let cuenta = 0 
let id;

const iniciar = () => {

    id= setInterval(() => {
        console.log(cuenta)
        cuenta++;
    }, 1000)
};


const stop = () => {
    console.log("parando la cuenta")
    clearInterval(id)
};
