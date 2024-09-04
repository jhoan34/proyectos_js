
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import api from "../helpers/wp_api.js"
import { Post } from "./post.js";
import { SearchCard } from "./searchCard.js";


export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main")
  const loader = d.querySelector(".loader")
  const {hash} = location;
  console.log(hash)

  if(!hash || hash === "#/"){
    $main.innerHTML = `<h2>Seccion del Home</h2>`
    await ajax({
      url: api.POSTS,
      cbSuccess:(posts) => {
        let html = "";
        console.log(posts)
        posts.forEach(element => html += PostCard(element));
        $main.innerHTML = html;
      }
      
    })
    
  }else if(hash.includes("#/search")){
    $main.innerHTML = `<h2>Seccion de busqueda</h2>`
    let query = localStorage.getItem("wpSearch")
    if(!query){
      loader.style.display = "none"
      return false

    }else {
      await ajax ({
        url:`${api.SEARCH}${query}`,

        cbSuccess:(search) => {
          console.log(search)
          let html = "";
          if(search.length === 0){
            html = `
              <p class="error">
                No existe resultados de busqueda para el
                <mark> ${query} </mark>
              </p>
            
            `
          }else{
            search.forEach ((post) => html += SearchCard(post))
          }
          $main.innerHTML = html

        }
      })
    }

  }else if(hash === "#/contacto"){
    $main.innerHTML = `<h2>Seccion de contacto</h2>`
  }else{
    $main.innerHTML = `<h2>Aqui esta el contenido previamente seleccionado</h2>`
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostid")} `,
      cbSuccess:(posts) => {
        console.log(posts, "dsadsadsadsa")
        $main.innerHTML = Post(posts)

      }
      
    })
  }
  loader.style.display = "none";
}

