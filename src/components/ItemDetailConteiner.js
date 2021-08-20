import { useState, useEffect } from "react";
import ArrayProductos from "../arrayProductos.js";
import ItemDetail from "./ItemDetail"  
import { Link } from "react-router-dom";

function ItemDetailConteiner() {
  const [productos, setProductos ] = useState([]);
   
    useEffect(() => {
      new Promise((resolve, reject) => {

        setTimeout(() => resolve(ArrayProductos), 1000);
    })
      .then((datosResolve) => {
        console.log("datos Resolve", datosResolve);
        setProductos(datosResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
        <div className="flex">
            {ArrayProductos.map((cadaProducto)=>(
            <div className="card"style={{width: "18rem"}}>
            <img src={cadaProducto.pictureUrl} className="card-img-top" alt=""/>
            <h4 className="card-title">{cadaProducto.title}</h4>
            <Link to= {`/ItemDetail`}>Ver Más</Link>
    </div> 
        ))}
  </div>
  );
}


export default ItemDetailConteiner