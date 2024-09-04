
const ratingContainer = document.querySelector(".rating");
let currentValue = 0;
const limit = 10;
 


const html = Array.from(Array(limit)).map((item, index) =>{
  return `<div class="item item-${index}" data-pos="${index}"><p> </p></div>`
})




ratingContainer.innerHTML = html.join("");



document.querySelectorAll(".item").forEach((item) => {

  item.addEventListener("click", (e) => {
    const pos = item.getAttribute("data-pos");

   
    document.querySelectorAll(".item").forEach((item) => {
      if (item.classList.contains("item-full")) {
        item.classList.remove("item-full");
      }
    });
    for (let index = 0; index <= pos; index++) {
      const item = document.querySelector(`.item-${index}`);
      if (!item.classList.contains("item-full")) {
        item.classList.add("item-full");
      }
    }
    
  });

})



const array = [1, 0, 2, 2, 2, 2, 3, 4, 5, 7, 7, 7, 8, 8, 10, 10];

function encontrarRepetidos(array) {
  
  let repetidos = []
  let sinRepetidos = [];

  for (let i = 0; i < array.length; i++) {
    if (sinRepetidos.includes(array[i])) {
      repetidos.push(array[i])
     
    } else {
      sinRepetidos.push(array[i]) 
    }
  }
  console.log(repetidos)
  return sinRepetidos.sort()

}

console.log(encontrarRepetidos(array));
