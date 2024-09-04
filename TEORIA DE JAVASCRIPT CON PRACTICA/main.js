const zona = document.querySelector(".zona");

zona.addEventListener("dragover", (e) => {
    e.preventDefault()
})

zona.addEventListener("drop", (e) => {
    let n = e.dataTransfer.getData("textura");
    zona.computedStyleMap.background = `url("textura${n}.png")`;


})

for( let i = 0 ; i < document.querySelector(".texturas").children.length; i++){
    document.querySelector(`.texturas${i}`).addEventListener("dragstart", (e) => transferir(i,e))
}

const transferir = (n,e) => {
    e.dataTransfer.setData("textura", n)

}

//     br   br    br   br  b rb   bbr  br  br  br  br  br bb rr br


/*
 metodos para el historial 
 
 ⁡⁢⁣⁣back( ) lo que hace es devolver 
 forward() lo que hace es ir adelante 
 go(0) recarga la pagina , go(-1 ) va a la anterrior y go(1) va a ala de delante
 pushstate() modifica la url = history."pushstate(status = objeto", "", "url")⁡


*/ 

/// reader


const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
    leerArchivo(archivo.files[0])
})

const leerArchivo = (arr) => {
    const reader = new reader()
    reader.readAsText(ar)
    reader.addEventListener("load", (e) => {
        console.log(e.currentTarget.result)

    })
}

//

localStorage.setItem("nombre", "camilo");
console.log(localStorage)


