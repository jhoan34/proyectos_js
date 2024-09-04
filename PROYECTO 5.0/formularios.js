// formularios : tenemos dos formas de acceder a formularios. -mediante el objeto de forms
// -mediante metodos del dom

//console.log(document.forms["formulario-donacion"]["correo"].value);

document.getElementById("btnEnviar").addEventListener("click", (e) => {
    e.preventDefault();

    const correo =document.querySelector("#formulario-donacion [name=correo]");
    console.log(correo.value);

    console.log(document.forms["formulario-donacion"]["pais"].value);

    const formulario = document.forms["formulario-donacion"];
    console.log(formulario["donacion"].value);

    console.log(formulario["terminos-y-condiciones"].checked)
});

//const caja = document.querySelector("#formulario-donacion #pais")
//const variable = [...caja]
//variable.forEach((ca) => {
  //  console.log(ca)

//})
