import "../css/item.css";
import ItemList from "./ItemList";
import {productos} from "../productos"
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


 function ItemListConteiner() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { category }  = useParams()

  useEffect(() => {
    new Promise((resolve, reject) => {
    
        setLoading(true); 

    if (category !== undefined){
        setTimeout(() => resolve(productos.filter((item)=>item.category === category)), 2000);
    }else{
      setTimeout(() => resolve(productos), 2000);
    }
    })
      .then((datosProductos) => {
        console.log("datos productos", products)
        setProducts(datosProductos);
        setLoading(false);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, [category]);

  return loading ? (

    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
) : (
        <div className="contenedor">
            <ItemList products={products}/>
        </div>
  );
}

export default ItemListConteiner;