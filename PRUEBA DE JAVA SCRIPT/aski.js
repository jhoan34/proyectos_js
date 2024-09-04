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

const mostarPost = async() => {
    try{
        const posts = await fetchPosts()
        console.log(posts);

    }catch(erorr){
        console.log(erorr);
    }

}

mostarPost();


// lo que dice awawit es que primero se ejecuta esa ese codigo si y solo si termina ejcuta el reste de las otras lineas de codigo 
// async