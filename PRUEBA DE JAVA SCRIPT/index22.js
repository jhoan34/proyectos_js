const usuario = {

    edad: 18,
    pais: "españa",
    ticket: false,
    correo: false

};

//if(usuario.edad > 17 && usuario.pais == "mexico" && usuario.ticket || usuario.correo) {
  //  console.log("el usuario tiene permitido entrar");
//} else {
  //  console.log("el usuario no puede entrar");
//};

if( usuario.edad >= 18) {
    if(usuario.ticket){
        console.log("el usuario es mayor de edad y tiene el ticket")

    } else{
        console.log("el usuario es mayor de edad, pero no  tiene ticket. " )
    }
} else{
    console.log("el usuario es menor de edady no tiene ticket")
}


const usuario1 = {
    edad: 18,
    pais: "españa",
    ticket: false,
    correo:"gmail.com",
};

if(usuario1.correo === "gmail.com"){
    console.log("el usuario tiene correo con terminacion en gmail.")

}else if (usuario1.correo === "outlook.com"){
    console.log("el usuario tiene correo con terminacion en outlook.")
}

