import Logo from "./logo.js";
import Icono from "./CartWidget"
import cssNavbar from "../css/navbar.css"

function NavBar () {
    return(
        <nav>
           <Logo/>
           <ul className="estiloMenu">
               <li><a href="#">HOME</a></li>
               <li><a href="#">SUBLIMAR</a></li>
               <li><a href="#">DISEÑO</a></li>
               <li><a href="#">EMPRESA</a></li>
               <li><Icono/></li>
            </ul>
       </nav>
    )
}

export default NavBar;