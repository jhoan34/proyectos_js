// modificar estilos de css

let variable = document.querySelector("#contenedor1 .caja3");


const agregarclase = () => {
    variable.classList.add("activa");

};    

const eliminarclase = () => {
    variable.classList.remove("caja3");
}

const alternar = () => {
    suprime.classList.toggle("caja3");
}