import { createContext, useContext } from "react";


export const CartContext = createContext([]);

export const CartProvider = (props) => {

    const [ cart, setCart] = useContext(CartContext);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}

