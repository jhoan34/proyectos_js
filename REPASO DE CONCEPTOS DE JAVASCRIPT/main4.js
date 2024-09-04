
let input = "dsadsa"

function errorMessage(input) {
  if(input === ""){
    console.log( 'Required field')
  }
  if(typeof input === "number" ){
    console.log("")

  }
  if(typeof input === "string"){
    console.log( 'Must be a number besides 0')
  }  
}

errorMessage(input)
const deck = [5, 4, 7, 10];
const FACE_CARDS = ['jack', 'queen', 'king'];
deck[1] = FACE_CARDS.join()
console.log(deck)


function sumAsync(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000); // Simula una operación asíncrona de 1 segundo
}

// Uso
sumAsync(787878, 7, (result) => {
  console.log('La suma es:', result);
});
