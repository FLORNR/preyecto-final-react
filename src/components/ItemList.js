
import "../css/item.css"
import Item from "./Item"


 function ItemList({products}) {
     return (
     <div className= "flex">
         {products.map ((item) => (<Item {...item} key={item.id}/>
         ))}
     </div>
 )};
export default ItemList;

