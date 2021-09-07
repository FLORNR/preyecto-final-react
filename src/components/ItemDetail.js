import ItemCountHooks from "./ItemCount"
import "../css/item.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"


 function ItemDetail(props){
     
    const [ cantidadCompra, setCantidadCompra ] = useState();
    const [ terminarCompra, setTerminarCompra] = useState(false);

    const [ cart, setCart ] = useContext(CartContext);

    const onAdd = (cantProducto) => {
        setCantidadCompra(cantProducto)
        setTerminarCompra(!terminarCompra)
    }


    const addToCart = () => {
        const producto = {item: props}
        setCart(carrito =>[...carrito, producto]);
    } 
    
    return(
        <div>
            <div className="card cardRender"style={{width: "18rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title">{props.description}</p>
            <h4 className="card-title">{props.price}</h4>
            {terminarCompra ? (
                <Link to = "/cart" onClick= {addToCart} className="boton">FINALIZAR COMPRA</Link>
                ) : (
                <ItemCountHooks valorInicial= {props.initial} stock= {props.stock} onClick={(cantidad)=>onAdd(cantidad)}/>
            )}
            </div>
        </div> 
        )};                     



export default ItemDetail