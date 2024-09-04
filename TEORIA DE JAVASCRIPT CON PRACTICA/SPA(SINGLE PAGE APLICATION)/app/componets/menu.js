export function Menu () {
    const menu = document.createElement("nav")
    menu.classList.add("menu")
    menu.innerHTML = `
        <a class="m" href="#/">Home</a>
        <a class="m" href="#/search">Busqueda</a>
        <a href="#/contacto">Contacto</a> 
        <a class="m" href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende js</a>
    
    `
    return menu;
}