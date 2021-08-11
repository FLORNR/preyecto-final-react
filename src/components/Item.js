import ItemCountHooks from "./ItemCount";


function Item(props) {
    
    return (
       
        <div className="card"style={{width: "18rem"}}>
                <img src={props.pictureUrl} className="card-img-top" alt=""/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
                <h5 className="card-text">{props.price}</h5>
                <ItemCountHooks valorInicial = "1" stock ="10"/>
                <a href="#" className="btn btn-primary">Pedir</a>
        </div>                                                                                                                    
);
}

export default Item;
