const boton = document.querySelector(".btn");
const numeros = document.querySelector(".pon");
  
let al = ['abcdefghijklmnopqrstuvwxyz'];
const cantidadLetras = 5;

const getRandomWord = () => {
  const randomLetters = al.map((elemento) => {
    let randomString = '';
    for (let i = 0; i < cantidadLetras; i++) {
      const indiceAleatorio = Math.floor(Math.random() * elemento.length);
      randomString += elemento[indiceAleatorio];
    }
    return randomString;
  });

  const randomNumber = Math.floor(Math.random() * 100000000).toString();

  return randomLetters.join('') + randomNumber;
}

boton.addEventListener('click', () => {
  numeros.textContent = getRandomWord() 
});

 
