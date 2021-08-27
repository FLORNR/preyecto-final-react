import ItemCountHooks from "./ItemCount"
import "../css/item.css"
import { useState } from "react"
import { Link } from "react-router-dom"



 function ItemDetail(props){
    const [ cantidadCompra, setCantidadCompra ] = useState();
    const [ terminarCompra, setTerminarCompra] = useState(false);

    const onAdd = (cantProducto) => {
        setCantidadCompra(cantProducto)
        setTerminarCompra(!terminarCompra)
    }

    return(
        <div>
            <div className="card cardRender"style={{width: "18rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title">{props.description}</p>
            <h4 className="card-title">{props.price}</h4>
            {terminarCompra ? (
                <Link to = "/cart" className="boton">FINALIZAR COMPRA</Link>
                ) : (
                <ItemCountHooks valorInicial= "1" stock= "10" onClick={(cantidad)=>onAdd(cantidad)}/>
            )}
            </div>
        </div> 
        )};                     



export default ItemDetail