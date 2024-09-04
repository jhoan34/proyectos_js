const tiempo = document.querySelector(".o");
const diahu = document.querySelector(".q")

const fecha4 = document.querySelector(".op");

const digital = () => {
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1 ,
    anio = f.getFullYear(),
    diaSemana = f.getDay()

    let time = f.toLocaleTimeString();
    tiempo.innerHTML = time

    fecha4.innerHTML = `${dia}-${mes}-${anio}`;

    const array = ["SUN", "MON" , "TUE", "WED", "THUR", "FRI" , "SATU"];
    const modulo = array[diaSemana];

    
    diahu.innerHTML= modulo;

}

setInterval(() => {
    digital()
}, 1000);


const numeros = [2,3]

numeros.forEach((numero) => {

  if(numero === 2){
    
    for(let numero = 2; numero < 100 ; numero += 2){
        console.log(numero)
    }
  }else {
    console.log("error")
  }

})

/*
const numeros = [5, 2, 7];

numeros.forEach(numero => {
  let incremento;

  if(numero % 2 === 0) {
    // Es par
    incremento = 2;
  } else {
    // Es impar
    incremento = 1; 
  }

  for(let i = numero; i <= 10; i+=incremento) {
    console.log(i);
  }

});
*/