self.addEventListener("fetch", event => {
    event.respondWith(handleFetch(event));
});

self.addEventListener("message", event => {
    // Manejar el mensaje recibido desde la página
    const message = event.data;

    // Obtener la URL de la página que originó el mensaje
    const originUrl = event.source.url;

    // Crear el mensaje con la URL y el contenido
    const result = mostrarMensaje(message);
    
    // Definir las URLs a las que deseas redirigir los mensajes
    const targetUrls = [
        "http://127.0.0.1:5500/index2.html",
        "http://127.0.0.1:5500/index.html"
        // Agrega más URLs según sea necesario
    ];

    // Enviar el mensaje a cada URL de destino
    targetUrls.forEach(targetUrl => {
        // Verificar que la URL de destino no sea igual a la URL de origen
        if (originUrl !== targetUrl) {
            clients.matchAll().then(clients => {
                clients.forEach(client => {
                    // Verificar que la URL del cliente coincida con la URL de destino
                    if (client.url === targetUrl) {
                        client.postMessage( result );
                        console.log(result)
                    }
                });
            });
        }
    });
});


    
function handleFetch(event) {
    // Aquí puedes personalizar cómo manejar las solicitudes de recursos
    console.log("Solicitud interceptada:", event.request.url);

    // Puedes realizar alguna lógica y responder con un nuevo recurso si es necesario
    // En este ejemplo, simplemente devolvemos la respuesta original
    return fetch(event.request);
}

function mostrarMensaje(message) {
    const result = `<div class="isquierda">
        <p>${message}</p>
    </div>`;
    return result;
}

/*
    self.addEventListener("message", event => {
            // Manejar el mensaje recibido desde la página
            const message = event.data;
    
            console.log("Mensaje recibido en el service worker:", message);
            // Mostrar el mensaje en algún lugar (puedes adaptarlo según tus necesidades)
            const result = mostrarMensaje(message);
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    // Verificar que la URL del cliente no sea igual a la URL de la pestaña que originó el evento
                    if (client.self  !== index.html) {
                            client.postMessage(result);
                        
                    }
                });
            });
    });
*/        