const bAdd = document.querySelector("#bAdd");


bAdd.addEventListener("click", (e) =>{
  e.preventDefault()

  const eventName = document.querySelector("#eventName").value; 
  const eventDate = document.querySelector("#eventDate").value;

  console.log(eventDate,eventName)

  

  if(eventName !== "" && eventDate !== ""){
    document.querySelector("#eventName").value = ""
    document.querySelector("#eventDate").value = ""
  

    const resultHtml = renderTime(eventDate, eventName ) 
    const re = document.querySelector("#tasksContainer")
    re.innerHTML += resultHtml

    borrar()
  }
})


function renderTime (fecha, input ){

  let f = new Date()
  let dia = f.getDate()
  let mes = f.getMonth()+1
  let anio = f.getFullYear()

  console.log(`${dia}/${mes}/${anio}`);

  const fg = fecha.split("");
  console.log(fg, "dsadsadsa")
  const dr = fg.slice(8,10).join("");
  const total = dr - dia


  const resultHtml1 = `
  <div class="task">
    <div class="days"><span class="days-number">${total}</span><span class="days-text">días</span></div>
    <div class="event-name">${input}</div>
    <div class="event-date">${fecha}</div>
    <div class="actions">
      <button class="bDelete">Eliminar</button>
    </div>
  </div>`;

  return resultHtml1

}


function borrar (){

  
  document.querySelectorAll(".bDelete").forEach((boton) => {

    boton.addEventListener("click", (e) =>{

      const tarea = e.target.closest(".task");

      tarea.remove()

    })
    
  });
}