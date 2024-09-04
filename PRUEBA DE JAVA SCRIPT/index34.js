const usuario1 = {
    edad: 18,
    pais: "españa",
    ticket: false,
    correo:"gmail.com",
};

switch (usuario1.pais) {
    case "mexico":
        console.log("el usuario es mexicano");
        break;
     case "españa":
        console.log("el usuario es español");
        break;
    
     case "argentina":
        console.log("el usuario es argentino");
        break; // el break es para romper la cadena de bloque ya que si no se aplica entonces se sigue saltanto ala otra variable o linea de codigo
    default:
        console.log("el usuario es de otro pais") // es como else este es aplica si no se cumple ningua de las otras condiciones o variables   

}


const usuario = {

    edad: 18,
    pais: "mexico",
    ticket: false,
    correo: false

};

if(usuario.edad > 17 && usuario.pais == "mexico" && usuario.ticket || usuario.correo) {
  console.log("el usuario tiene permitido entrar");
} else {
  console.log("el usuario no puede entrar");
};


const boleto = "vip";
let acceso


if (boleto === "vip"){
    acceso = "vip-8989-8989";
}else{
    acceso = "regular-456-132";
}

console.log(acceso)
