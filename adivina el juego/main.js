const imagenes = document.querySelector(".w");
const imagenes2 = document.querySelector(".e");
const imagenes3 = document.querySelector(".r");
const imagenes4 = document.querySelector(".t");
const imagenes5 = document.querySelector(".y");
const imagenes6 = document.querySelector(".u");
const p = document.querySelector(".bj");

const array = ["1", "2", "3", "4", "5", "6" ];

const boton = document.querySelector(".or");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  const dor = document.getElementById("kop").value;
  const aleatorio = Math.floor(Math.random() * array.length);
  const numero = array[aleatorio];
  console.log(numero)

  // Resetear las clases y el contenido del párrafo antes de verificar la respuesta
  imagenes.classList.remove("point");
  imagenes2.classList.remove("point");
  imagenes3.classList.remove("point");
  imagenes4.classList.remove("point");
  imagenes5.classList.remove("point");
  imagenes6.classList.remove("point");
  p.innerHTML = "";

  // Verificar la respuesta para cada imagen
  if (dor === numero) {
    let total = dor
    if(parseInt(total) <= 6){
      if(total === "1"){
        imagenes.classList.add("point")
      }
      if(total === "2"){
        imagenes2.classList.add("point")
      }
      if(total === "3"){
        imagenes3.classList.add("point")
      }
      if(total === "4"){
        imagenes4.classList.add("point")
      }
      if(total === "5"){
        imagenes5.classList.add("point")
      }
      if(total === "6"){
        imagenes6.classList.add("point")
      }
      p.innerHTML = "correcto"
      
    }else{
      return

    }



  } else {
    p.innerHTML = "incorrecto";
  }


  // Repetir el mismo patrón para las demás imágenes...
});


  
    

  


      
  













    