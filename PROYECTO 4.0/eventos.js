const boton1 = document.getElementById("po")
const primera = document.querySelector(".caja1")

boton1.addEventListener("click", (e) => {
    console.log(e)
    primera.classList.toggle("activa")
});



///

const cajas = document.querySelectorAll(".caja")


cajas.forEach((caja) => {
    caja.addEventListener("click" , (e) => {
        console.log("haz hecho click en la " + e.target.innerHTML)
    })


})

