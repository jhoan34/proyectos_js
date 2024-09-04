//ventana input: una ventana donde el usuario puede introducir un valor retorna una cadena de texto

const saludo = () => {
    const variable = prompt("escribe tu nombre")
    if(variable === "jhoan"){
        alert("bienvenido")
    }else {
        alert("error")
    }
}
