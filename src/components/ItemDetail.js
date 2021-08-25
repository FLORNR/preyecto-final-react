import ItemCountHooks from "./ItemCount"
import "../css/item.css"
import { useState } from "react"
import { Link } from "react-router-dom"



 function ItemDetail(props){
    const [ count, setCount ] = useState(0)
    return(
        <div>
            <div className="card cardRender"style={{width: "18rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title">{props.description}</p>
            <h4 className="card-title">{props.price}</h4>
            <ItemCountHooks valorInicial= "1" stock="10" onAdd={setCount}/>
            <button className="boton">AGREGAR</button>
            {count > 0 && <Link className="boton" to="/cart">FINALIZAR COMPRA</Link>}
            </div>      
        </div> 
    )};                     



export default ItemDetail