
import NavBar from "./components/navbar.js"
import Main from "./components/main.js"
import Footer from "./components/footer.js"
import ccsIndex from "./css/Index.css"
import { BrowserRouter, Switch, Route} from "react-router-dom";                                                                                  
import ItemListConteiner from "./components/ItemListConteiner.js";
import ItemDetailConteiner from "./components/ItemDetailConteiner.js";

function App() {
  return (
    <div className="general">
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <ItemListConteiner/>
            </Route>
            <Route exact path ="/item/:id">
                <ItemDetailConteiner/>
            </Route>
        </Switch>
        <Footer/> 
    </BrowserRouter>
  </div>
  );
}

export default App;
