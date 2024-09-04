const d = document;

d.addEventListener("click", (e) => {
    
  if(e.target.matches("#btn")){
    const eventName = document.querySelector("#nombre").value; 
    const eventText = document.querySelector("#texto").value;
  
    console.log(eventText,eventName)
    if(eventName !== "" && eventText !== ""){
        document.querySelector("#texto").value = ""
        document.querySelector("#nombre").value = ""
      
    
        const resultHtml = recopilar(eventName, eventText ) 
        const re = document.querySelector(".q")
        re.innerHTML += resultHtml
    
      }
  }
});

const recopilar = (nombre, texto) => {
    let resultado;
    resultado = `
        <div class="estilo">
            <h3 class="ti"> ${nombre} </h3>
            <p>  ${texto} </p>
            <div class="as">
              <input type="text" class="x" placeholder="comentario">
            </div>
           
        </div>
    `;
    return resultado;
};
