import "../css/item.css";
import ItemList from "./ItemList";
import {productos} from "../productos"
import {useEffect, useState} from 'react';


 function ItemListConteiner() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
    
      setTimeout(() => resolve(productos), 2000);
    })
      .then((datosProductos) => {
        console.log("datos productos", products)
        setProducts(datosProductos);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
        <div className="contenedor">
            <ItemList products={products}/>
        </div>
  );
}

export default ItemListConteiner;