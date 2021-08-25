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

useEffect(()=>{
    onAdd(count);
}, [count]);

   return (
    <>
    <h5>CANTIDAD: {count}</h5>
    <button onClick = {()=> restarProductos()}> - </button>
    <button onClick = {()=>sumarProductos()}> + </button>
    
    </>
    )
};

export default ItemCountHooks;