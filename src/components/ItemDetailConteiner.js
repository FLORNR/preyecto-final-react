import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import "../css/item.css"
import "../css/Loading.css"
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase';

function ItemDetailConteiner() {
  const [producto, setProducto ] = useState([]);
  const [loading, setLoading] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        // función que busca todos los productos
        const getProduct = async () => {
        const prodCollection = collection(getData(), 'productos');
        const prodSnapshot = await getDocs(prodCollection);
        const prodList = prodSnapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));
        // filtro el listado y busco el producto que quiero mostrar
        const thisProd = prodList.filter((item)=>item.id === id)
        setLoading(false);
        setProducto(thisProd);
        };
        getProduct();
    }, [id]);


if (loading) {
    return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}

return (
    <div className="gral">
    { producto.map((item) => {
        return(
            <>
            <ItemDetail id={item.id} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock} initial={item.initial} key={item.id}/>
            <Link className="botonVolver" to= "/"> VOLVER A PRODUCTOS </Link>
            </>
        )
        })
    }
    </div>
)}


export default ItemDetailConteiner