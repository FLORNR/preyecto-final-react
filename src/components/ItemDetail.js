


 function ItemDetail(props){

    return(
        <div className="flex">
            <div className="card"style={{width: "18rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h2 className="card-title">{props.title}</h2>
            <h4 className="card-title">{props.description}</h4>
            <h4 className="card-title">{props.price}</h4>
            <button className="btn btn-primary">COMPRAR</button>
            </div>      
        </div> 
    )};                     



export default ItemDetail