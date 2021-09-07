import { useContext } from "react";
import { CartContext } from "../context/cartContext";


function Cart () {
    
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((i, valor) => i + valor.price, 0)

    return (
        <div> 
        <h2>DETALLE DE SU COMPRA</h2>
        <p>Cantidad de Productos: {cart.length}</p>
        <p>TOTAL: {totalPrice}</p>
        </div>
     )  
    
}
export default Cart;



