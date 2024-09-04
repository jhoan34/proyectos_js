const d = document,
 table = d.querySelector(".crud-table"),
 form = d.querySelector(".crud-form"),
 title = d.querySelector(".crud-title"),
 template = d.getElementById("crud-template").content,
 fragment = d.createDocumentFragment();


const getAll = async () => {
    try{

        let res = await fetch("http://localhost:3000/posts");
        let json = await res.json();

        if(!res.ok) throw{status: res.status, statusText: res.statusText }

        console.log (json)

        json.forEach(el => {
            // Crear un nuevo elemento para cada iteración
            
            // Actualizar el contenido del nuevo elemento
            template.querySelector(".name").textContent = el.title;
            template.querySelector(".constellation").textContent = el.constelacion;
            template.querySelector(".direccion").textContent = el.direccion;
            template.querySelector(".edit").dataset.id = el.id;
            template.querySelector(".edit").dataset.nombre = el.title;
            template.querySelector(".edit").dataset.constelacion = el.constelacion;
            template.querySelector(".edit").dataset.direccion = el.direccion
            template.querySelector(".delete").dataset.id = el.id;
        
            let clone = d.importNode(template, true);
            fragment.appendChild(clone);
        });
        
        // Agregar el fragmento al tbody una sola vez después del bucle forEach
        table.querySelector("tbody").appendChild(fragment);
        

    }catch (err) {

        let message = err.statusText || "Ocurrió un error";
        table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);

    }
}

d.addEventListener("DOMContentLoaded", getAll);

// ... (código anterior)

d.addEventListener("submit", async e => {
    if (e.target === form) {
        e.preventDefault();

        if (!e.target.id.value) {
            // Crear - POST
            try {
                // Construir opciones para la solicitud POST
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        title: e.target.nombre.value,  // Cambiado de title a nombre
                        constelacion: e.target.constelacion.value,
                        direccion: e.target.direccion.value
                    })
                };

                console.log(options);  // Mostrar opciones en la consola

                // Realizar la solicitud POST
                let res = await fetch("http://localhost:3000/posts", options),
                    json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                location.reload();
            } catch (err) {
                // Manejar errores durante la creación
                let message = err.statusText || "Ocurrió un error";
                form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        } else {
            // Actualizar - PUT
            try {
                // Construir opciones para la solicitud PUT
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        title: e.target.nombre.value,  // Cambiado de title a nombre
                        constelacion: e.target.constelacion.value,
                        direccion: e.target.direccion.value
                    })
                };

                // Realizar la solicitud PUT
                let res = await fetch(`http://localhost:3000/posts/${e.target.id.value}`, options),
                    json = await res.json();

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                location.reload();
            } catch (err) {
                // Manejar errores durante la actualización
                let message = err.statusText || "Ocurrió un error";
                form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        }
    }
});

d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
      // Preparar el formulario para la edición
      title.textContent = "Editar Santo";
      form.nombre.value = e.target.dataset.nombre;
      form.constelacion.value = e.target.dataset.constelacion;
      form.direccion.value = e.target.dataset.constelacion
      form.id.value = e.target.dataset.id;
    }
  
    if (e.target.matches(".delete")) {
      // Confirmar y eliminar en caso de clic en "Delete"
      let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);
  
      if (isDelete) {
        // Eliminar - DELETE
        try {
          // Construir opciones para la solicitud DELETE
          let options = {
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            }
          };
  
          // Realizar la solicitud DELETE
          let res = await fetch(`http://localhost:3000/posts/${e.target.dataset.id}`, options),
            json = await res.json();
  
          if (!res.ok) throw { status: res.status, statusText: res.statusText };
  
          location.reload();
        } catch (err) {
          // Manejar errores durante la eliminación
          let message = err.statusText || "Ocurrió un error";
          alert(`Error ${err.status}: ${message}`);
        }
      }
    }
});
  
