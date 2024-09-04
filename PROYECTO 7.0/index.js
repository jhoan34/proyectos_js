const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const guardar = document.getElementById("botonGuardar");

const caja1 = document.querySelector("#container0");
const caja2 = document.querySelector("#container1");
const error = document.querySelector(".error")
const guardar1 = document.querySelector("#nuevo");




guardar.addEventListener("click", (e) => {
  e.preventDefault();

  const cantidad = document.getElementById("cop").value; 

  if(cantidad === "") {
    error.classList.add("hj")
    return;
  }
  
  else if(typeof cantidad === "number") {
    // cantidad is a number
    error.classList.remove("hj")
  }
  
  else if(typeof cantidad === "string") {
    // cantidad is a string
    error.classList.remove("hj") 
  }

  boton2.addEventListener("click" , (e) => {
    e.preventDefault()
    
    caja1.classList.add("active");


})

  

})



guardar1.addEventListener("click", (e) => {
  e.preventDefault()

  const datos = {
    nombre: document.querySelector("#a").value,
    correo: document.querySelector("#b").value,
    telefono: document.querySelector("#c").value,
    pais: document.querySelector("#d").value,
  }
  if(datos.nombre !== "string" || datos.nombre === "") {
    console.log(" el campo llenado no es correcto")
    return;
  }






  

})







boton3.addEventListener("click", (e) => {
    e.preventDefault()
    caja1.classList.remove("active")
})