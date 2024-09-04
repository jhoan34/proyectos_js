const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

// Función para obtener todos los datos al cargar el DOM
const getAll = async () => {
  try {
    // Obtener datos del servidor
    let res = await fetch("http://localhost:3000/posts"),
      json = await res.json();

    // Manejar la respuesta
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);

    // Llenar la tabla con los datos obtenidos
    json.forEach(el => {
      $template.querySelector(".name").textContent = el.title;
      $template.querySelector(".constellation").textContent = el.constelacion;
      
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.nombre = el.title;
      $template.querySelector(".edit").dataset.constellation = el.constelacion;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    // Manejar errores durante la obtención de datos
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
  }
};

// Evento para escuchar el DOMContentLoaded y obtener los datos
d.addEventListener("DOMContentLoaded", getAll);

// Evento para escuchar el envío del formulario
d.addEventListener("submit", async e => {
  if (e.target === $form) {
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
            nombre: e.target.title.value,
            constelacion: e.target.constelacion.value
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
        $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
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
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
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
        $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
      }
    }
  }
});

// Evento para escuchar clics en la tabla
d.addEventListener("click", async e => {
  if (e.target.matches(".edit")) {
    // Preparar el formulario para la edición
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
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

