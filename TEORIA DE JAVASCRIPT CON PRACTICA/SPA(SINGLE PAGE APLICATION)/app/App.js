
import { loader } from "./componets/loader.js"
import { Header } from "./componets/header.js"
import { Main } from "./componets/Main.js"
import {Router} from "./componets/router.js"
import { infiniteScroll } from "./helpers/infinite_scroll.js"

export function App() {
  const root = document.getElementById("root")

  root.innerHTML = null
  root.appendChild(Header())
  root.appendChild(Main())
  root.appendChild(loader())
  Router()
  infiniteScroll()
  

}

