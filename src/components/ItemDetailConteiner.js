import { useState, useEffect } from "react";
import {productos} from "../productos";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import "../css/item.css"
import "../css/Loading.css"

function ItemDetailConteiner() {
  const [producto, setProducto ] = useState([]);
  const [loading, setLoading] = useState(false);

    const {id} = useParams();
   
    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => resolve(productos.filter((item)=>item.id === id)), 1000);
    })
      .then((datosProducto) => {
        setProducto(datosProducto[0]);
        setLoading(false);
      })

      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return loading ? (

    <div className="loadingio-spinner-bean-eater-jn47c5ktji loading">
        <div className="ldio-o84b2rt9xe">
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
        </div></div>
) : (
    <div className="gral">
        <ItemDetail {...producto}/> 
    
        <Link className="botonVolver" to= "/"> VOLVER A PRODUCTOS </Link>
    </div>  
  )
};


export default ItemDetailConteiner