const cajas = document.querySelectorAll(".op");

function handleClick(e) {
    const ele = e.currentTarget;

    // Deseleccionar todas las cajas
    cajas.forEach((caja) => {
        caja.removeEventListener("click", handleClick); // Eliminar el escuchador de eventos de clic
        caja.style.backgroundColor = ""; // Establecer el color de fondo a vacío
    });

    if (ele.id !== "rt") {
        ele.style.backgroundColor = "red";
    }else{
        ele.style.backgroundColor = "green";
    }
}

cajas.forEach((ele) => {
    ele.addEventListener("click", handleClick);
});
