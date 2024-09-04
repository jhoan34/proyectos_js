const contenedor = document.getElementById("contenedor1");

contenedor.addEventListener("click", (e) => {
    console.log("haz presionados el contenedor")
})


const caj = document.querySelector(".caja");
caj.addEventListener("click" , (e) => {
    e.stopPropagation();
    console.log("haz presionado una caja");
})


// bubbling (false, por defecto): en bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre
// capturing (true) : el elemento padre reacionan primero y liuego el hijo
