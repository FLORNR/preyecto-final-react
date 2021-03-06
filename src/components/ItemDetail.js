import ItemCountHooks from "./ItemCount"
import "../css/item.css"
import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"


 function ItemDetail(props) {

    const { cart, addItem } = useContext(CartContext); 
    const [ cantidadCompra, setCantidadCompra ] = useState();
    const [ terminarCompra, setTerminarCompra] = useState(false);
    const [ newInitial, setNewInitial ] = useState(props.initial);


    useEffect(() => {
        const checkCart = cart.findIndex ((obj) => obj.id === props.id );
        if (checkCart >= 0) {
            const actualInitial = cart[checkCart].quantity
            setNewInitial(actualInitial);
            
        }
    }, [cart, props.id, props.initial, props.stock]);


    const agregarAlCarrito = (cantProducto) => {
        setTerminarCompra(!terminarCompra)
        addItem (props, cantProducto)
    }
    
    return(
        <div>
            <div className="card cardRender"style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-title">{props.description}</p>
            <h4 className="card-title"> ${props.price}</h4>
            {terminarCompra ? (
                <Link to = "/cart" className="boton">IR AL CARRITO</Link>
                ) : (
                <ItemCountHooks valorInicial= {props.initial} stock= {props.stock} onClick={(cantidad)=>agregarAlCarrito(cantidad)}/>
            )}
            </div>
        </div> 
        )};                     



export default ItemDetail