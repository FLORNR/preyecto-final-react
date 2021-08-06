import React, {useState} from "react";

function ItemCountHooks (props) {
   const [count, setCount] = useState(parseInt(props.valorInicial))
   const [stockProd, setStockProd] = useState(parseInt(props.stock)) 

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
    <h1>CANTIDAD DEL PRODUCTO: {count}</h1>
    <button onClick = {()=> restarProductos()}> - </button>
    <button onClick = {()=>sumarProductos()}> + </button>
    
    </>
    )
};

export default ItemCountHooks;