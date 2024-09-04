if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("sw.js");
}

navigator.serviceWorker.addEventListener("message", e => {
  document.querySelector(".mensaje").innerHTML += e.data;
  
});

document.querySelector(".formulario").addEventListener("submit", e => {
  e.preventDefault();

  const input = document.querySelector(".tec").value;
  const resultado1 = construir(input);
  document.querySelector(".mensaje").innerHTML += resultado1;

  // Sends a message to the service worker
  navigator.serviceWorker.controller.postMessage(input);
  document.querySelector(".tec").value = ""
});

function construir(v) {
  let resultado1 = `<div class="derecha">
      <p>${v}</p>
  </div>`;
  return resultado1;
}