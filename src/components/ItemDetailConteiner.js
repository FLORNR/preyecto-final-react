import { useState, useEffect } from "react";
import {productos} from "../productos";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import "../css/item.css"

function ItemDetailConteiner() {
  const [producto, setProducto ] = useState([]);

    const {id} = useParams();
   
    useEffect(() => {
      new Promise((resolve, reject) => {

        setTimeout(() => resolve(productos.filter((item)=>item.id === id)), 1000);
    })
      .then((datosProducto) => {
        console.log("datos producto", datosProducto);
        setProducto(datosProducto[0]);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
    <div className="gral">
        <ItemDetail {...producto}/> 
    
        <Link className="botonVolver" to= "/"> VOLVER A PRODUCTOS </Link>
    </div>  
  )
}


export default ItemDetailConteiner