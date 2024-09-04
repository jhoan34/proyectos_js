const IDBRequest = indexedDB.open("jhoanbase", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
})



IDBRequest.addEventListener("success", () => {
    console.log("todo salio correctamente")
})
IDBRequest.addEventListener("error", () => {
    console.log("ocurrio un error")
})

const addObjeto = objeto => {
    const db =IDBRequest.result
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objeto)
    IDBtransaction.addEventListener("success", () => {
        console.log("todo salio correctamente")
    })
}
const leerObjetos = (objeto) => {
    const db = IDBRequest.result 
    const IDBtransaction = db.transaction("nombres", "readonly")
    const objectStore = IDBtransaction.objectStore("nombres")
    const cursor = objectStore.openCursor()
    cursor.addEventListener("success", () => {
        if(cursor.result){
            console.log(cursor.result.value)
        }
    })

}

const modificar = (key,objeto) => {
    const db =IDBRequest.result
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto,key  )
  
}

const eliminar = (key) => {
    const IDBdata = getData("readwrite", "se elimino correctamente")
 
    IDBdata.delete(key)
   
}


const getData = (mode, msg) =>{
    const db =IDBRequest.result
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key  )
    IDBtransaction.addEventListener("complete", () => {
        console.log("msg")
    })
    return objectStore


}