// flujo de eventos (burbja) de refirere cuando hya una propagacion de los eventos
// en las cjas cuando se hace el click en una determinada caja

const m = document.querySelectorAll(".m");
function handler (e) {
    console.log(`hola soy la caja ${this.className}, en el que se origino en ${e.target.className}`)
}



m.forEach((div) => {
    div.addEventListener("click" , handler ,false)

    // fase de captura significa que va del elemento mas externo al elemento mas interno cuando se le agrega true
    div.addEventListener("click" , handler ,true)
    // el parametro once:true hace que que el evento se que ejequte una sola vez y no importa si tiene el elemento tiene padres o hijos

})



/// delegacion de eventos lo que se hace es generar una adeventlistener unico un un elemento padre p
// para que asi los delege a sus hijos

const position = 2;
const replacementCard = 6;
const cards = [1, 2, 4, 1];

function setItem(cards, replacementCard) {
    cards.push(replacementCard)
    return cards
  }
  
 console.log(setItem(cards, replacementCard));




console.log(cards.length) 