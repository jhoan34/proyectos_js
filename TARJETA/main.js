const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";
let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];



const fg = document.querySelector("#fg");
const sd = document.querySelector("#sd");
const qw = document.querySelector("#qw");

fg.addEventListener("keydown", (e) => {
    if(e.key === "tab"){
        return;

    }

    e.preventDefault()
    handlerInput(maskNumber, e.key, cardNumber)
    const l = fg.value = cardNumber.join("")
    console.log(cardNumber, "ssssssssssssssssssssss")
    inputCard.value = l;
    
    
})


sd.addEventListener("keydown", (e) => {
    if(e.key === "tab"){
        return;

    }

    e.preventDefault()
    handlerInput(maskDate, e.key, dateNumber)
    sd.value = dateNumber.join("")
    inputDate.value = sd.value;
    
    
})


qw.addEventListener("keydown", (e) => {
    if(e.key === "tab"){
        return;

    }

    e.preventDefault()
    handlerInput(maskCVV, e.key, cvvNumber)
    qw.value = cvvNumber.join("")
    inputCVV.value = qw.value;
    
    
})

function handlerInput (mask, key, arr){
    let numbers = ["1", "2", "3", "4", "5" , "6" ,"7" ,"8", "9" ];

    if (key === "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    }

    if(numbers.includes(key) && arr.length + 1  <= mask.length ){
        if(mask[arr.length] === "-" ||  mask[arr.length] === "/"){
            arr.push(mask[arr.length])
        }else{
            arr.push(key)
        }
        
    }
}


console.log(maskNumber[cardNumber.length])