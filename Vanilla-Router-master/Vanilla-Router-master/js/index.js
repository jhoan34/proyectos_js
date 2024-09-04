import {PATHS} from "/Vanilla-Router-master/js/routes.js"
import {Router} from "/Vanilla-Router-master/js/router.js"

console.log(PATHS)
console.log(Router)


const ROUTER = new Router(PATHS);



document.querySelector("#header").addEventListener("click", e => {
    const result = e.target;

    if(result.id === "About"){
        ROUTER.nuevo("about")
        console.log("se presiono home" , e)
    }
    
    if(result.id === "Home"){
        ROUTER.nuevo("home")
        console.log("se presiono home" , e)
    }
    
    if(result.id === "Contact"){
        ROUTER.nuevo("contact")
        console.log("se presiono home" , e)
    }
})