const eliminarCaja = () => {
    const padre = document.getElementById("contenedor1");
    const hijo = padre.querySelector(".caja1");
    padre.removeChild(hijo)
}