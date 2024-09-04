const contenedo =  document.getElementById("contenedor1")

console.log(contenedo)

//inner : nos permite ver la extructura de toddo los elementos del contenedor
//children : nos permite obrenre los elementos hijos
console.log(contenedo.children) 

// parentElement: nos permite obtener le elemento padre

console.log(contenedo.parentElement)

//getElementBytagName nos permite obtener una collecion de lementos en base a ala etiqueta

document.getElementsByTagName(div)
console.log(div.length)

//getElementsByClassname : nos permite obetener una collecion de elementos en base a su clse de css
const contenedor = document.getElementsByClassName("contenedor")
console.log(contenedor)


//querySelector : nois devuelve el primer elemento que coincida con un selector estilo css
// en ele momento de saber el hijo del contenedor padre solo va devolver el primer hijo
const caja = document.querySelector( ".contenedor1 .caja")

// queryselectorAll: nos permite obtener una colleccion de elementos en base al selector estilo css

const caja1 = document.querySelectorAll("caja") //el metodod de foreach se puede ejecutar en las listas de nodos
console.log(caja1)

// closest : nos permite busacr de adentro hacia fuera en busca de un elemento

const ultimaCaja = document.querySelector("#contenedor2 .caja:last-child");
console.log(ultimaCaja);
console.log(ultimaCaja.closest(".contenedor_principa"));