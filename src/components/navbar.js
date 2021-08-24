import Logo from "./logo.js";
import Icono from "./CartWidget";
import "../css/navbar.css";
import {Link} from "react-router-dom";

function NavBar () {
    return(
        <nav>
           <Logo/>
           <ul className="estiloMenu">
               <li><Link to ="/">HOME</Link></li>
               <li><Link to ="/category/sublimar">SUBLIMAR</Link></li>
               <li><Link to = "/category/diseño">DISEÑO</Link></li>
               <li><Link to = "/category/empresa">EMPRESA</Link></li>
               <li><Icono/></li>
            </ul>
       </nav>
    )
}

export default NavBar;