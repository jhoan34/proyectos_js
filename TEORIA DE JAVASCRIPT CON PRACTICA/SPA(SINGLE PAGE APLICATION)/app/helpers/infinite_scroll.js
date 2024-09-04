import { PostCard } from "../componets/PostCard.js";
import { Post } from "../componets/post.js";
import { SearchCard } from "../componets/searchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function infiniteScroll (){
    const d = document;
    const w = window;
    let query = localStorage.getItem("wpSearch");
    let apiUrl;
    let component; // Cambiar 'componets' a 'component'
    w.addEventListener("scroll" , async e => {
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement
        let {hash} = w.location
        // console.log(scrollTop, clientHeight, scrollHeight, hash)


        if(scrollTop + clientHeight >= scrollHeight){
            api.page++

            if(!hash || hash === "#/"){
                apiUrl = `${api.POSTS}&page=${api.page}`
                component = PostCard // Cambiar 'Component' a 'component'

            }else if(hash.includes("#/search")){
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`
                component =  SearchCard // Cambiar 'Component' a 'component'
            }else{
                return false
            }

            await ajax ({
                url: apiUrl,
                cbSuccess: (posts)  => {
                    let html = "";
                    posts.forEach(Post => {
                        html += component(Post)
                    
                    });
                    d.getElementById("main").insertAdjacentHTML("beforeend" , html)
    
                }
    
            })
        }

        console.log(component)

                
 


    })
}
