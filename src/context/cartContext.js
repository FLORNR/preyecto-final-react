import { createContext, useContext, useState } from "react";



export const CartContext = createContext([]);

export const CartProvider = (props) => {

    const [ cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     const producto = [...cart, item];
    //     setCart(producto);
    // } 

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}

