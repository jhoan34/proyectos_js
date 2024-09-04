console.log("la ventana mide de ancho " + window.innerWidth + "px");
console.log("la ventana mide de alto " + window.innerHeight + "px");

let ventana;
const abrirVentana = () => {
    ventana = window.open("", "cross" , "width=500","height=500")
    ventana.document.write("hola estoy aqui")
}

const cerrarVentana = () => {
    ventana.close()
}


// screen object
// representa la pantalla del usuario


console.log( "ancho " + window.screen.width);
console.log( "alto " + window.screen.height);


console.log( "ancho " , window.screen.availWidth)
console.log( "ancho " , window.screen.availHeight)
