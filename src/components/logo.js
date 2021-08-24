
import "../css/logo.css";
import {Link} from "react-router-dom";


function Logo (){
    return (
        <Link className="ordenarTitulo" to ="/">
            <p className="titulo">RADICCI</p>
            <p className="titulo2">MODA</p>
        </Link>
     )
};

export default Logo;

