
import {Link} from 'react-router-dom';
import "../css/item.css"


function Item(props) {
    
    return (
       
        <div className="card card2"style={{width: "15rem", heigth: "50rem"}}>
            <img src={props.pictureUrl} className="card-img-top" alt=""/>
            <h4 className="card-title">{props.title}</h4>
            <Link className="boton" to= {`/item/${props.id}`}>VER MÁS</Link>
        </div>                                                                                                                    
);
}

export default Item;
                        
