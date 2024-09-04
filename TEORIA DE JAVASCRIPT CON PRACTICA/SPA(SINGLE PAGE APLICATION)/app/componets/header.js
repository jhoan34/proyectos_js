import { Menu } from "./menu.js";
import { SearchForm } from "./searchForm.js";
import {Title} from "./Title.js"

export function Header () {
    const Header = document.createElement("header");
    Header.classList.add("header")
    Header.appendChild(Title())
    Header.appendChild(Menu())
    Header.appendChild(SearchForm())

    return Header


}