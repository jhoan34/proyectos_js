const cajaLeer = document.querySelector(".leer");
const request = indexedDB.open("computador", 1)
console.log(request)

request.onupgradeneeded = function () {
    const db = request.result
    db.createObjectStore("nombres", {autoIncrement: true})
}


request.onsuccess = function(){
    console.log("todo salio correctamente")
    leer()
    document.getElementById("btn").addEventListener("click", (e) => {
        e.preventDefault()
    
        const nombre = document.querySelector("#nom").value
        const apellido = document.querySelector("#ap").value
        const datos = {
            nombre: nombre,
            apellido: apellido
        }
        if(typeof nombre === "string" || typeof apellido === "string"){
            if(nombre !== "" || apellido !== ""){
                addObj(datos)
                document.querySelector("#nom").value
                document.querySelector("#ap").value
            }
        }
      
        
    })
    document.querySelector("#eliminar").addEventListener("click", (e) => {
        const key = document.querySelector("#ars").value
        const nuevo = parseInt(key)
        if(typeof key === Number ){
            if(key !== ""){
                eliminar(nuevo)
                document.querySelector("#ars").value = ""
    
            }

        }

       
    }) 

    document.getElementById("s").addEventListener("click", () => {
        const nombre = document.querySelector("#moN").value
        const apellido = document.querySelector("#moA").value
        const datos = {
            nombre: nombre,
            apellido: apellido
        }
        const key = document.querySelector("#moK").value
        const keyT = parseInt(key) 
        if(typeof nombre === "string" || typeof apellido === "string" || typeof keyT === "number"){
            if(nombre !== "" || apellido !== "" || key !== "" ){
                modificar(datos, keyT)
                document.querySelector("#moN").value = ""
                document.querySelector("#moA").value = ""
                document.querySelector("#moK").value = ""
        

            }
        }
    })

}
request.onerror = function( ) {
    console.log("ocurrio algun error al abrir la base de datos")
}


let addObj = (objeto) => {
    const add = getData("readwrite" , "todo salid correctamente")
    add.add(objeto)
}


let leer = () => {
    const db = request.result;
    const transaction = db.transaction("nombres", "readonly");
    const objectStore = transaction.objectStore("nombres");
    const le = objectStore.getAll();

    le.addEventListener("success", e => {
        const data = e.target.result;
        data.forEach(ele => {
            const html = `
                <div class="nuevo">
                    <h4>Nombre: ${ele.nombre}</h4>
                    <h4>Apellido: ${ele.apellido}</h4>
                </div>
            `;
            // Agrega el HTML a tu documento, por ejemplo, dentro de un contenedor con id "resultados"
            cajaLeer.innerHTML += html;
        });
    });
};



let  eliminar = (key) => {
    const eli = getData("readwrite", "se elimino correctamente")
    eli.delete(key)
    eli.onsuccess = (e) => {
        console.log(e, "dsaaaaaaaaaaaaaaaaaa")
    }


}

let modificar = (objeto, key) => {
    const modi = getData("readwrite", "se modifico correctamente") 
    modi.put(objeto, key)
}
 


let getData = (mode, msg) => {
    const db = request.result;
    const transaction = db.transaction("nombres", mode);
    const objectStore = transaction.objectStore("nombres");
    request.onsuccess = () => {
        console.log(msg)
    }
    return objectStore

}




