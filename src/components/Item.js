import Empresarial from "../img/empresarial.jpg"
import Musculosa from "../img/musculosa.webp"
import RemeraDiseño from "../img/remeraDiseno.webp"
import RemeraSublimar from "../img/remeraSublimar.webp"


function Item() {
    
    return (
        `<div class="card" style="width: 18rem;">
        <div class="card" style="width: 18rem;">
            {products.map((cadaProducto) =>  {
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
            <h4 class="card-title">{cadaProducto.title}</h4>
            <p class="card-text">{cadaProducto.description}</p>
            <h5 class="card-text">{cadaProducto.price}</h5>
            <a href="#" class="btn btn-primary">Pedir</a>
        </div>
    </div> 
  })`);                                                      
} 

export default Item;