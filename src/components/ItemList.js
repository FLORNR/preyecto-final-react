
import itemCSS from "../css/item.css"
import ItemDetailConteiner from "./ItemDetailConteiner.js"
import ArrayProductos from "../arrayProductos.js"
const { useEffect, useState } = require("react");


 function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
    
      setTimeout(() => resolve(ArrayProductos), 2000);
    })
      .then((datosResolve) => {
        console.log("datos Resolve", datosResolve);
        setProducts(datosResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
        <div className="flex">
            <ItemDetailConteiner/>
        )
  </div>
  );
}

export default ItemList;

