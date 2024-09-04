const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3a5d64e627b4c96de39b1657adc59c60&language=es-MX");
        console.log(respuesta)
        let peliculas = "";

        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            console.log(datos, "dsaa")
            console.log(datos.results)
            datos.results.forEach(pelicula => {
                peliculas += `
                   <div class="pelicula">
                       <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path} ">
                       <h3>${pelicula.title}</h3>
                   </div> 
                `
            });

            document.getElementById("contenedor").innerHTML = peliculas;
        } else if (respuesta.status === 401) {
            console.log("la llave esta mal")
        } else if (respuesta.status === 404) {
            console.log("la pelicula que pusiste no existe")
        } else {
            console.log("hubo un error y no sabemos cual es")
        }


    } catch (error) {
        console.log(error)

    }

}


cargarPeliculas()


const d = document;
function searchFilter() {
    d.addEventListener("keyup", e => {
        const l = e.target
        if (l.classList.contains("input")) {
            d.querySelectorAll(".pelicula").forEach(el => {
                el.textContent.toLowerCase().includes(l.value.toLowerCase())
                    ? el.classList.remove("filter")
                    : el.classList.add("filter");
            })
        }
        console.log(l.value)
    })
}

searchFilter()

function forEachAsync(array, callback) {
    let index = 0;
  
    function processNext() {
      if (index < array.length) {
        callback(array[index], index, array);
        index++;
        setTimeout(processNext, 500); // Simula una operación asíncrona de 0.5 segundos
      }
    }
  
    processNext();
}
  
  // Uso
  const myArray = [1, 2, 3, 4, 5];
  
forEachAsync(myArray, (element, index, array) => {
    console.log(`Procesando elemento ${element} en el índice ${index} del ${array}`);
});



function pick() {
  const numbers = [ ];
  while (numbers.length < 10) {

    numbers.push(Math.floor(Math.random() * 10))

  }
  console.log(numbers)

}

pick()