import"../css/navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"

//funcion para crear el icono del carrito, con link al carrito de compras
function CartIco () {

    const { cartLength } = useContext(CartContext); 

    console.log(cartLength)

    return (
    <Link to="/cart" className="cartIco" >
        <i style={{color:"rgb(241, 173, 173)"}} className="fas fa-shopping-cart"></i>
        { {cartLength} === 0 ? (
                ""
            ) : (
                <span>{ cartLength }</span>
            )}
    </Link>
    )
};

export default CartIco;