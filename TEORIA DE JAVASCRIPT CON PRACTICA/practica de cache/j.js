let version = "version 3 ";

self.addEventListener("install", () => {
    console.log("se ha instalado correctaente")
    caches.open(version).then( res => {
        res.add("index.html").then( l => {
            console.log("informacio cacheada")

        }).catch ( e => {
            console.log(e)
        })

    })
    
})

self.addEventListener("activate", () => {
    caches.keys().then(keys => {
        return Promise.all(keys.map(key => {
            if(key !== version){
                console.log("ha sido eliminado el caché antiguo");
                return caches.delete(key);
            }
        }));
    });
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            try {
                const respuesta = await caches.match(event.request);
                return respuesta || fetch(event.request);
            } catch (error) {
                console.error("Error en el evento fetch:", error);
                throw error;
            }
        })()
    );
});
