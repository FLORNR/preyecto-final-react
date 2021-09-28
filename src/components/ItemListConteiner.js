import "../css/item.css";
import ItemList from "./ItemList";
import {productos} from "../productos"
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';



 function ItemListConteiner() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { category }  = useParams()

  useEffect(() => {
    setLoading(true);

    // función que busca todos los productos
    const getProds = async () => {
      const prodCollection = collection(getData(), 'productos');
      const prodSnapshot = await getDocs(prodCollection);
      const prodList = prodSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setProducts(prodList);
    };

    // función que busca productos filtrados
    const getCategory = async () => {
      const prodCollection = collection(getData(), 'productos');
      const categoryQuery = query(prodCollection, where('category', '==', `${category}`));
      try {
        const prodSnapshot = await getDocs(categoryQuery);
        const categoryList = prodSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLoading(false);
        setProducts(categoryList);
      } catch (err) {
        console.log(err);
      }
    };

    // elijo qué función utilizar
    if (category !== undefined){
      getCategory();
    } else {
      getProds();
    }

  }, [category]);


  return loading ? (

    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
) : (
        <div className="contenedor">
            <ItemList products={products}/>
        </div>
  );
}

export default ItemListConteiner;