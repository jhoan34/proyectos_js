const agregarcaja = () => {
    //crear elemento

   const nuevaCaja = document.createElement("div")

   // agregamos texto y atributos
   nuevaCaja.innerText = "nueva caja";
   nuevaCaja.setAttribute("id", "nuevo-id");
   nuevaCaja.setAttribute("class", "cajahiper" )
   
   // agregar el elemento al DOM
   const content = document.getElementById("contenedor1")

   //content.appendChild(nuevaCaja);
   document.querySelector("#contenedor1 .caja1").replaceWith(nuevaCaja)


}