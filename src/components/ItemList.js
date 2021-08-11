import Item from "./Item.js";
import Empresarial from "../img/empresarial.jpg"
import Musculosa from "../img/musculosa.webp"
import RemeraDiseño from "../img/remeraDiseno.webp"
import RemeraSublimar from "../img/remeraSublimar.webp"
import itemCSS from "../css/item.css"
const { useEffect, useState } = require("react");


 function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
     
      const datos = [
        {
            id: '1',
            title: 'Remera Blanca Para Sublimar',
            description: 'Remera de Spun, blanca para sublimar en distintos talles',
            price: '$480',
            pictureUrl: {RemeraSublimar},
        },
        {
            id: '2',
            title: 'Remera Diseño',
            description: 'Remera de Spun, en distintos talles y colores, diseño sublimado a elección',
            price: '$700',
            pictureUrl: {RemeraDiseño}
        },
        {
            id: '3',
            title: 'Musculosa Blanca Para Sublimar',
            description: 'Musculosa de Spun, blanca para sublimar en distintos talles',
            price: '$450',
            pictureUrl: {Musculosa},
        },
        {
            id: '4',
            title: 'Remera con cuello Empresarial',
            description: 'Remera para personalizar con logo de tu empresa, distintos talles',
            price: '$900',
            pictureUrl: {Empresarial},
        }
    ];   
      setTimeout(() => resolve(datos), 2000);
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
            {products.map((cadaProducto)=>(
            <Item {...cadaProducto}/>)
        )}
  </div>
  );
}

export default ItemList;

