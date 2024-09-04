const publicaciones = document.querySelector(".xc");
let contador = 0; // Ensure you have a counter variable defined.

const crearPublicacion = (nombre, texto) => {
    const div = document.createElement("div");
    div.classList.add("estilo");

    div.innerHTML = `
        <h3 class="ti">${nombre}</h3>
        <p>${texto}</p>
        <div class="as">
            <input type="text" class="x" placeholder="comentario">
        </div>
    `;

    return div;
};

const cargarMas = (entries, observer) => {
    if (entries[0].isIntersecting) {
        cargarPublicacion(4);
    }
};

const observer = new IntersectionObserver(cargarMas);
observer.observe(publicaciones); // Assuming you want to observe the ".xc" element.

const cargarPublicacion = async (num) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        console.log(json);
        const documentFragment = document.createDocumentFragment();

        for (let i = 0; i < num; i++) {
            if (json[contador] != undefined) {
                const newPublication = crearPublicacion(json[contador].title, json[contador].body);
                documentFragment.appendChild(newPublication);
                contador++;
                if (i === num - 1) {
                    observer.observe(newPublication);
                }
            } else {
                let noMore = document.createElement("h3");
                noMore.textContent = "no hay mas publicaciones";
                documentFragment.appendChild(noMore);
            }
        }

        publicaciones.appendChild(documentFragment);
    } catch (err) {
        console.error(err);
    }
};

// Initial load
cargarPublicacion(4);
