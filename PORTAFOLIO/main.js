document.querySelector(".b").addEventListener("click", e => {
    const clicbutton = e.target
    if(clicbutton.classList.contains("f")){
        console.log("estoy presionando el facebook")
        window.location.href = "https://www.facebook.com/"
    }
    if(clicbutton.classList.contains("i")){
        console.log("estoy presionando el instagram")
        window.location.href = "https://www.instagram.com/johan_9_80/" 
    }
    if(clicbutton.classList.contains("t")){
        console.log("estoy presionando el twitch")
        window.open("https://www.twitch.tv/rivers_gg", "_blank");
        window.localStorage.setItem("redireccion", "https://www.twitch.tv/rivers_gg");
    }
})

window.scrollTo(0, 500); // Desplaza la ventana a la posición vertical 500
