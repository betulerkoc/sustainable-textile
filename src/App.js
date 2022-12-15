import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/new" component={NewProduct}/>
      <Route path="/all" component={Products}/>
    </Router>
  );
}

export default App;
