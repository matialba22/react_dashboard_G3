import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
