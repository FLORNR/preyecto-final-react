import React, { useState } from "react";

function ItemCountHooks (props) {
    console.log("props", props)
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
console.log("count", count)
   return (
    <>
    <h5>CANTIDAD: {count}</h5>
    <button onClick = {()=> restarProductos()}> - </button>
    <button onClick = {()=>sumarProductos()}> + </button>
    <button className="boton" onClick={()=>props.onClick(count)} >AGREGAR</button>
    </>
    )
};

export default ItemCountHooks;