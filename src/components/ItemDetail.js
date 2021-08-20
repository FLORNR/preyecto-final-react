import ItemCountHooks from "./ItemCount"
import itemCSS from "../css/item.css"



 function ItemDetail(props){

    return(
        <div>
            <div className="card cardRender"style={{width: "18rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title">{props.description}</p>
            <h4 className="card-title">{props.price}</h4>
            <ItemCountHooks valorInicial= "1" stock="10"/>
            <button className="boton">COMPRAR</button>
            </div>      
        </div> 
    )};                     



export default ItemDetail