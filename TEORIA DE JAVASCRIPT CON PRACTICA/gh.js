// Inside gh.js (service worker script)
self.addEventListener("install", e => {
    console.log("instalando service worker");
});

self.addEventListener("activate", () => {
    console.log("el servidor activo");
});

self.addEventListener("fetch", () => {
    console.log("fue interceptado");
});

self.addEventListener("message", e => {
    console.log("mensaje recibido del navegador:");
    console.log(e.data);
    e.source.postMessage(e.data);
});
