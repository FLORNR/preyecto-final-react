import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom"
import "../css/item.css"

//Funcion para crear Carrito de Compras, en el cual verifico la cantidad de productos

function Cart () {
    const { cart, removeItem, cartLength, vaciarCarrito, totalPrice } = useContext(CartContext);

    return (
        cartLength <= 0 ? 
        (<div>
           <h1 className= "formato">DETALLE DE TU COMPRA</h1>
            
           <div>
                <h2 className= "formato">Tu carrito esta vacío... 

 ¡Comenza a disfrutar de la moda a tu manera, clickea aquí abajo!<i className="far fa-smile-beam"></i></h2>
                
                    <Link to="/">
                        <button className="boton empezaComprar" >¡Empezá a comprar!</button>
                    </Link>
            </div>
        </div>
        ):(
        <div>
            <div>
                <h1 className= "formato">DETALLE DE TU COMPRA</h1>
            </div>
            <div className= "container-fluid">
                <div className = "row estiloTitulo">
                    <h4 className= "col-md-6 estiloItems">Productos</h4>
                    <h4 className= "col-md-2 estiloItems">Cantidad</h4>
                    <h4 className= "col-md-2 estiloItems">Precio</h4>
                    <h4 className= "col-md-1 estiloItems">Acciones</h4>
                </div>
            </div>

            { cart.map((item) => {
                    return (
                    <div className= "container-fluid">
                        <div className= "row estiloTituloDos" key={item.id}>
                            <div className= "col-md-2 estiloItemsDos"><img style= {{ maxWidth: "100%", maxHeight: "50px"}} src={item.img} alt={item.name}/></div>
                            <div className= "col-md-4 estiloItemsDos">{item.name}</div>
                            <div className= "col-md-2 estiloItemsDos">{item.quantity}</div>     
                            <div className= "col-md-2 estiloItemsDos">$ {item.price}</div>
                            <div className= "col-md-1 estiloItemsDos">
                                <Link to={`/item/${ item.id }`}><button className="iconos2"><i className="fas fa-pencil editar"></i></button></Link>
                                <button className="iconos2" onClick={()=>removeItem(item.id)}><i className="fas fa-trash eliminar"></i></button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            <div>
                <h3 className="tituloCompra">Total de su compra: ${totalPrice}</h3>
                <div className="acomodarBoton">
                    <button onClick={ ()=> vaciarCarrito() } className="emptyButton iconos">Vaciar  <i className="fas fa-trash eliminar"> </i></button>
                    <Link to="/" ><button  className="emptyButton iconos" >Seguir Comprando  <i className="fas fa-hand-point-left continuar"> </i></button></Link>
                    <Link to= "/cartForm"><button className="emptyButton iconos">Finalizar Compra  <i className="fas fa-check-square finalizar"></i></button></Link>
                </div>
            </div>
        </div>
     
    ))
}
export default Cart;



