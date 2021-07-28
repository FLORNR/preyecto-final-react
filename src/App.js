
import NavBar from "./components/navbar.js"
import Main from "./components/main.js"
import Footer from "./components/footer.js"
import cssIndex from "./css/Index.css"

function App() {
  return (
    <div className="App general">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
          <Main/>
      </main>
      <footer>
      <Footer/> 
      </footer>
    </div>
  );
}

export default App;
