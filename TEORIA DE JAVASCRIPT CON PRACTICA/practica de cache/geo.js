const geolocalitation = navigator.geolocation

const posicion = (e) => {
    console.log(e)
}    

const err = (err) => console.log(err)

let options = {
    maximumAge: 0, 
    timeout:3000,
    enableHightAccuracy: true
}

geolocalitation.getCurrentPosition(posicion, err, options)