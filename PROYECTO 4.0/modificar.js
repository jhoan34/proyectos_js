//Element.innerHTML NOS PERMITE CAMBIAR EL CONTENIDO HTML DE UN ELEMNTOA


const primerCaja = document.querySelector("#contenedor1 .caja1");
const primerCaja1 = document.querySelector("#contenedor2 .caja1");
primerCaja.innerHTML = "parte"
primerCaja1.innerHTML= "mmmm"

console.log(primerCaja.innerHTML)


//elemnto. atribute: nos permite acceder y cambiar atributos del elemento.

caja1.id = "nueevo";
caja1.values = "nueevo";
caja1.src = "nueevo";

//elemento.setattribute():      //nos permite agrgear o establecer el valor de un atributo del elemento

primerCaja.setAttribute("class" , "modol")
 
 elemento.style.property //es parar modificar los estilos de css.

let mejor = document.querySelector("#contenedor1 .caja1");
console.log(mejor);
mejor.style.color = "red";