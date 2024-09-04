export function SearchForm () {
    const d = document
    const form = d.createElement("form")
    const input = d.createElement("input")
    form.classList.add("search-form")
    input.name = "search"
    input.type = "search"
    input.placeholder= "buscar...";
    input.autocomplete = "off"
  

    form.appendChild(input)

    if(location.hash.includes("#/search")){
        input.value = localStorage.getItem("wpSearch")
    }

    d.addEventListener("search" , e =>  {
        if(!e.target.matches("input[type='search']")){
            return false
        }else{
            if(e.target.value === ""){
                localStorage.removeItem("wpSearch")
            }
        }
    });


    d.addEventListener("submit", e => {
        e.preventDefault()
        if(!e.target.matches(".search-form")){
            return false
        }else{
            localStorage.setItem("wpSearch", e.target.search.value)
            location.hash =  `#/search?search=${e.target.search.value}`

        }
    }); 

    return form


}

/*
export function SearchForm () {
    const d = document
    const form = d.createElement("nav")
    const input = d.createElement("input")
    const enviar = d.createElement("input")
    enviar.type = "submit"
    enviar.classList.add("enviar")
    form.classList.add("search-form")
    input.name = "search"
    input.type = "search"
    input.placeholder= "buscar...";


    form.appendChild(input)
    d.addEventListener("submit", e => {
        console.log(e.target.value, "222222222222222")
        e.preventDefault()
        if(!e.target.matches(".search-form")){
            return false
        }else{
            localStorage.setItem("wpSearch", e.target.value)

        }
    })

    return form


}
*/