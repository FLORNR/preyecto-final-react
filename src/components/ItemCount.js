import React, { useState } from "react";
import "../css/item.css";

function ItemCountHooks (props) {
    
   const [count, setCount] = useState(parseInt(props.valorInicial))
   const [stock, setStock] = useState(parseInt(props.stock));
    

   function sumarProductos () {
    if (count < stock) {
        setCount(count +1)
    }
}                  

function restarProductos () {
    if (count > 0) {
        setCount(count -1)
    }
}
   return (
    <>
    <h5>CANTIDAD: {count}</h5>
    <div className="alLado">
        <button onClick = {()=> restarProductos()}> - </button>
        <button onClick = {()=>sumarProductos()}> + </button>
    </div>
    <button className="boton" onClick={()=>props.onClick(count)} >AGREGAR</button>
    </>
    )
};

export default ItemCountHooks;