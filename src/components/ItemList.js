import Item from "./Item.js";
const { useEffect, useState } = require("react");


 function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      ///
      const products = [
        {
            id: '1',
            title: 'Remera Blanca Para Sublimar',
            description: 'Remera de Spun, blanca para sublimar en distintos talles',
            price: '$480',
        },
        {
            id: '2',
            title: 'Remera Diseño',
            description: 'Remera de Spun, en distintos talles y colores, diseño sublimado a elección',
            price: '$700',
        },
        {
            id: '3',
            title: 'Musculosa Blanca Para Sublimar',
            description: 'Musculosa de Spun, blanca para sublimar en distintos talles',
            price: '$450',
        },
        {
            id: '4',
            title: 'Remera con cuelo Empresarial',
            description: 'Remera para personalizar con logo de tu empresa',
            price: '$900',
        }
    ];   
      setTimeout(() => resolve(products), 3000);
    })
      .then((productsResolve) => {
        console.log("products Resolve", productsResolve);
        setProducts(productsResolve);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }, []);

  return (
   <Item/>
  );
}

export default ItemList;

