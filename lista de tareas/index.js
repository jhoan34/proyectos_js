// es para los inpusts de formulario
const nombre = document.querySelector("#hj").value;
const tareaUno = document.querySelector("#qw").value;
const tareaDos = document.querySelector("#er").value;
const tareaTres = document.querySelector("#ty").value;
const tareaCuatro = document.querySelector("#ui").value;
const guardar = document.querySelector(".mn");
//


// es para la segunda caja de la etiqueta de los p
const primerTarea = document.querySelector(".zx");
const segundaTarea = document.querySelector(".kl")
const terceraTarea = document.querySelector(".vf");
const cuartaTarea = document.querySelector(".df");
const quintaTarea = document.querySelector(".gh");
// condicional del input del correo
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// es para el checkbox
const caja2 = document.querySelector(".mol")
const caja3 = document.querySelector(".react")
const caja4 = document.querySelector(".mort")
const caja5 = document.querySelector(".ort")
// input chekbox
const input = document.querySelector(".kak");
const input2 = document.querySelector(".cho")
const input3 = document.querySelector(".the")
const input4 = document.querySelector(".men")
const input5 = document.querySelector(".ri")

const caja = document.querySelector(".art")
    


guardar.addEventListener("click", (e) => {
    e.preventDefault()
    
     primerTarea.innerHTML = nombre
     segundaTarea.innerHTML = tareaUno
     terceraTarea.innerHTML = tareaDos
     cuartaTarea.innerHTML = tareaTres

     if(!nombre|| !tareaUno || !tareaDos || !tareaTres || !tareaCuatro){
        console.log("llenar todos los campos")
     }else{
        console.log("datos correctos")
     }



     if(emailRegex.test(tareaCuatro)){
      console.log("correcto " + nombre)
      quintaTarea.innerHTML = tareaCuatro

     }else if(tareaCuatro === ""){
        console.log("espacio vacio")

     }else {
      quintaTarea.innerHTML = "incorrecto"
     }

})





input.addEventListener('change', () => {
  if(input.checked) {

    caja.style.backgroundColor = 'blue'
    
  } else {
    caja.style.backgroundColor = ''; 
   
  }
  
});


input2.addEventListener('change', () => {
    if(input2.checked) {
  
      caja2.style.backgroundColor = 'blue'
      
    } else {
      caja2.style.backgroundColor = ''; 
     
    }
    
  });

  
input3.addEventListener('change', () => {
    if(input3.checked) {
  
      caja3.style.backgroundColor = 'blue'
      
    } else {
      caja3.style.backgroundColor = ''; 
     
    }
    
  });

  
input4.addEventListener('change', () => {
    if(input4.checked) {
  
      caja4.style.backgroundColor = 'blue'
      
    } else {
      caja4.style.backgroundColor = ''; 
     
    }
    
  });


  
input5.addEventListener('change', () => {
    if(input5.checked) {
  
      caja5.style.backgroundColor = 'blue'
      
    } else {
      caja5.style.backgroundColor = ''; 
     
    }
    
  });
  
  



  
  
  
  
  
  