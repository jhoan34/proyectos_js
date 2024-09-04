// callbacks

const obtenerPostDeUsuario = (usuario , callback) => {
    console.log("obteniendo los psot de " + usuario + " ...")


    setTimeout(() => {
        let post = ["post1" ,"post2" ,"post3"];
        callback(post);
    } , 2000);

} 

obtenerPostDeUsuario("carlos" ,  (post) => {
    console.log(post)
})


//promesas

const proms = new Promise((resolve, reject) => {

    setTimeout(()=>{
        const exito = true
        if(exito){
        resolve("la operacion tuvo exito")
        } else {
            reject("la operacion  no tuvo exito")
        }
    }, 4000);

});

proms.then((mensaje) => { // se jecuta si la promesa es correcta
    alert(mensaje);
});

proms.catch((mensaje) => {
    alert(mensaje)
})