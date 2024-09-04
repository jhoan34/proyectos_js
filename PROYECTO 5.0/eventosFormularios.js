const formulario = document.forms["formulario-donacion"];
const condiciones = document.querySelector("#pais")
// submit: nos permite detectar cuando el usuario intenta enviar un formulario

//formulario.addEventListener("click" , (e) => {
    //e.preventDefault();
  //  console.log("ennviando datos")
//})

// change no perimte ver algun cambio que tiene un input al cambiar un valor

//formulario.pais.addEventListener("change", () => {
  //  console.log("el pais cambio"+ e.target.value);

//} )



formulario["cantidad-5"].addEventListener("change" , (e) =>  console.log("la cantidad cambio"))
formulario["cantidad-10"].addEventListener("change" , (e) =>  console.log("la cantidad cambio"))


//evento focus : nos permite detectar cuando un input recibe el foco de atencion

formulario.correo.addEventListener("focus", () => {
    console.log("el input correo ahora es el focus de atencion")
    console.log(formulario.correo.value)
});

// evento blur : nos permite quitar el focus
formulario.correo.addEventListener("blur", () => {
    console.log("el input correo ya no es el focus de atencion")
});


// evento keydown: nos permite detectar cuando una tecla es presionada sobre el input
formulario.correo.addEventListener("keydown", (e) => {
    console.log(e.key)
})

//keyup: es para cuando una tecla ya es preionada