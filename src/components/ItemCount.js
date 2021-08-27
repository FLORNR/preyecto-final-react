import React, {useEffect, useState} from "react";

function ItemCountHooks (props) {
   const [count, setCount] = useState(parseInt(props.valorInicial))
   const [stockProd, setStockProd] = useState(parseInt(props.stock)) 
   const onAdd = () =>{}

   function sumarProductos () {
    if (count < stockProd) {
        setCount(count +1)
    }
}                  

function restarProductos () {
    if (count > 1) {
        setCount(count -1)
    }
}

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