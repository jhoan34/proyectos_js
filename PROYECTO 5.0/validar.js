const formulario = document.getElementById("formulario-donacion");


formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
   
    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario["terminos-y-condiciones"].checked

    }

    //combrobar el correo

    if(datos.correo.length <= 2){
        console.log("correo invalido")
        return ;
    }

    //com´probar pais
    if(datos.pais === ""){
        console.log("pais invalido")
        return;
    }

    if(datos.donacion === ""){
        console.log("selecione una cantidad a donar")
        return;
    }

    if(datos.fecha === ""){
        console.log("selecione una fecha")
        return;
    }

    if(!datos.terminos){
        console.log("acepta los terminos y condiciones");
        return;
    }
    
    console.log(datos)


})