const fetchPosts = () => {
    return new Promise((resolve , reject) => {
        
        setTimeout(() => {
            const post = ["pos1" , "post2" , "post3"]
            const erorr = true;

            if(erorr) {
                (reject ("hubo un error"))

            }else{
                resolve(post)
            }


        } ,2000)
    })
} 

fetchPosts()
.then((post) => {
    console.log(post)
})
.catch((erorr) => {
    console.log(erorr)
})

// las promesas son codigo asincronno: es el codigo que se va ejecutar de fondo lo que hace es esperar 
// la promesas mientras que haace otras tareas el hecho de que espere no quiere decor que no haga
// otras tareas