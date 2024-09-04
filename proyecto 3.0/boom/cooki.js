
const iniciarSesion = () => {
    const usuario = prompt("usuario..")
    document.cookie = `nombre=${usuario}`;
    alert("sesion iniciada")
}


let usuario;


const cookies = document.cookie.split(";")
console.log(cookies)

cookies.forEach((cookie) => {
    const propiedad = cookie.split("=")[0]
    console.log(propiedad)
    if(propiedad === "nombre" ){
        usuario = cookie.split("=")[1];
    }
})

if(usuario) {
    console.log("hola " + usuario)
}else {
    console.log("inicia sesion")
}


const cerrar = () => {
    document.cookie = "nombre=; expires=1 jan 2020 01: 00:00 utc"
}