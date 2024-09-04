// Obtiene el valor actual de visitas desde el almacenamiento local
let visitas = localStorage.getItem('visitas') || 0;

window.addEventListener("load", () => {
    // Incrementa la variable
    visitas = parseInt(visitas) + 1;

    // Almacena el nuevo valor de visitas en el almacenamiento local
    localStorage.setItem('visitas', visitas);

    // Verifica el número de visitas y muestra un mensaje
    if (visitas > 0) {
        console.log("Esta es tu visita número " + visitas);
    } else {
        console.log("Esta es tu primera visita");
    }

    // Imprime el valor de la variable
    console.log(visitas);
});



/*

// Función para obtener el valor de una cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Función para establecer el valor de una cookie
function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

// Obtiene el valor actual de visitas desde la cookie
let visitas = parseInt(getCookie('visitas')) || 0;

window.addEventListener("load", () => {
    // Incrementa la variable
    visitas += 1;

    // Establece el nuevo valor de visitas en la cookie
    setCookie('visitas', visitas);

    // Verifica el número de visitas y muestra un mensaje
    if (visitas > 0) {
        console.log("Esta es tu visita número " + visitas);
    } else {
        console.log("Esta es tu primera visita");
    }

    // Imprime el valor de la variable
    console.log(visitas);
});




*/