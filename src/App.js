
import NavBar from "./components/navbar.js"
import Footer from "./components/footer.js"
import "./css/Index.css"
import { BrowserRouter, Switch, Route} from "react-router-dom";                                                                                  
import ItemListConteiner from "./components/ItemListConteiner.js";
import ItemDetailConteiner from "./components/ItemDetailConteiner.js";
import { CartProvider} from "./context/cartContext";
import  Cart from "./components/Cart";

function App() {

  return (
    <div className="general">
     <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <main>
            <Switch>
                <Route exact path="/">
                    <ItemListConteiner/>
                </Route>
                <Route exact path ="/item/:id">
                    <ItemDetailConteiner/>
                </Route>
                <Route exact path = "/category/:category">
                    <ItemListConteiner/>
                </Route>
                <Route exact path="/cart">
                    <section>
                        <Cart />
                    </section>
                </Route>
            </Switch>
            </main>
            <Footer/> 
        </BrowserRouter>
    </CartProvider>   
  </div>
  );
}

export default App;
