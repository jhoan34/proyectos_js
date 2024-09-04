import api from "../helpers/wp_api.js"

export function Title() {
    const h1 = document.createElement("h1");
    h1.innerHTML = `
        <a class="title" href="${api.DOMAIN} " target="blank" rel="noopener">
          ${api.NAME.toUpperCase()}
        </a>
    `;
    return h1


}