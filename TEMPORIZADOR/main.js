
let hr = min = sec = ms = "0" + 0 , starTimer;
document.querySelector(".buttons").addEventListener("click", (event) => {
    const clickedButton = event.target;

    if (clickedButton.classList.contains("start")) {
        console.log("Botón Start clicado");
        start () 
    } else if (clickedButton.classList.contains("stop")) {
        console.log("Botón Stop clicado");
        stop()
       
    } else if (clickedButton.classList.contains("reset")) {
        console.log("Botón Reset clicado")
        reset()
        
    }
});



function start() {
    
        
  starTimer = setInterval(() => {

    ms++
    ms = ms < 10 ? "0" + ms : ms

    if(ms === 100 ){
        sec++
        sec = sec < 10 ? "0" + sec : sec
        ms = "0" + 0
    }

    if(sec === 60 ){
        min++
        min = min < 10 ? "0" + min: min
        sec = "0" + 0
    }

    if(min === 60){
        hr++
        hr = hr < 10 ? "0" + hr : hr
        min = "0" + 0 

    }

    putvalue()

            
  }, 10);

    
}

function stop() {
   clearInterval(starTimer)
}


function reset () {
    clearInterval(starTimer)
    hr = min = sec = ms = "0"+ 0;
    putvalue()

}


function putvalue () {
    document.querySelector(".hour").innerHTML = hr
    document.querySelector(".minute").innerHTML = min
    document.querySelector(".second").innerHTML = sec
    document.querySelector(".millisecond").innerHTML = ms
}




