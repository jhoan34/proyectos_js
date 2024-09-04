
const mod = document.querySelectorAll("#contenedor1")
console.log(mod.children)
let color = "red";

const l = () => {
    mod.forEach((caja) => {
      caja.style.color = color;
      
    });
  };
  