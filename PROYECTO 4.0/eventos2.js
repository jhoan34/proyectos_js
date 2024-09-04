const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

const primera = document.querySelector(".caja");

const toggleClase = () => {
    primera.classList.toggle("activa");
};

boton1.addEventListener("click", () => {
    primera.addEventListener("click", toggleClase);
} )


boton2.addEventListener("click", () => {
    primera.removeEventListener("click", toggleClase);
})