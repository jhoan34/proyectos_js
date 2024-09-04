const d = document;


function searchFilters (input, cajas) {

    d.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){

            console.log(e.target.value)

            d.querySelectorAll(cajas).forEach((el) =>
              el.textContent.toLowerCase().includes(e.key.value)
              ? el.classList.remove("filter")
              : el.classList.add("filter")
            
            )
        }
    })

}

// es para hacer un filtro de busquedas, matches puede servir para la delegacionde eventos
// mas que nada compara el evento con el focus del input delega el evento a sus hijos