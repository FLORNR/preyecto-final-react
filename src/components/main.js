import cssMain from "../css/main.css"
import ItemList from "./ItemListConteiner"
import ItemCountHooks from "./ItemCount"

function main() {
    return (
        <main>
        <div className="texto">
           <ItemList greeting= "Este será mi carrito de compras"/>
           <ItemCountHooks valorInicial = "1" stock ="10"/>
        </div>
        <div className="texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum culpa mollitia magnam totam voluptatem atque illo dolorem. Odit quo ad ex sit quis vitae provident facilis, amet nihil corporis?
        </div>
        <div className="texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum culpa mollitia magnam totam voluptatem atque illo dolorem. Odit quo ad ex sit quis vitae provident facilis, amet nihil corporis?
        </div>
        <div className="texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum culpa mollitia magnam totam voluptatem atque illo dolorem. Odit quo ad ex sit quis vitae provident facilis, amet nihil corporis?
        </div>
    </main>

    )
};

export default main;