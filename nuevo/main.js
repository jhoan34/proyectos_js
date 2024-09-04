const container = document.querySelector("#keyboard-container");
let limit = ["1","2", "3","4", "5", "6", "7", "8", "9", "0" ,"." ,"¡", "q","w", "e", "r" , "t", "y", "u", "borrar"];
const input = document.querySelector(".input");
const html = limit.map((Element,i ) => {

    return  `<div class="arr arr-${i} " data-pos="${i}" id="arr"><p class="m">${Element}</p></div> `

}) 
console.log(html)
container.innerHTML = html.join("")



document.querySelectorAll(".arr").forEach((ele) => {
    ele.addEventListener("click" , (e) => {
       e.preventDefault()
       const pos = ele.getAttribute("data-pos")
       console.log (limit[pos])
       

       if (limit[pos] === "borrar") {
        if (input.value.length === 1) {
          input.value = "";
        } else {
          input.value = input.value.slice(0, -1);
        }
        return;
      }
  
      input.value += limit[pos];
    })
    


})


