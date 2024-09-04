const formulario = document.getElementById("formulario-donacion");


formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
   
    const datos = {
        correo: formulario.correo.value,
    }

    //combrobar el correo

    if(datos.correo.length <= 2){
        console.log("correo invalido")
        return ;
    }
    console.log(datos)


})