import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom"

//Funcion para crear Carrito de Compras, en el cual verifico la cantidad de productos

function Cart () {
    const { cart, removeItem, cartLength, vaciarCarrito, totalPrice } = useContext(CartContext);

    console.log(cart)
    return (
        cartLength <= 0 ? 
        (<div>
           <h1>Carrito de Compras</h1>
            
           <div>
                <h2>Tu carrito esta vacío...</h2>
                
                    <Link to="/">
                        <button className="boton">¡Empezá a comprar!</button>
                    </Link>
            </div>
        </div>
        ):(
        <div>
            <div>
                <h1>Carrito de Compras</h1>
            </div>
            <div>
                <p>Productos</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <p>Acciones</p>
            </div>

            { cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <div><img src={item.img} alt={item.name}/></div>
                            <div>{item.name}</div>
                            <div>{item.quantity}</div>
                            <div>$ {item.price}</div>
                            <div>
                                <Link to={`/item/${ item.id }`}><button><i className="fas fa-pencil"></i></button></Link>
                                <button onClick={()=>removeItem(item.id)}><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <h3>Total: {totalPrice}</h3>
                <button  onClick={()=> vaciarCarrito } className="emptyButton">Vaciar <i className="fas fa-trash"></i></button>
            </div>
        </div>
     
    ))
}
export default Cart;



