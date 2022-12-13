import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import NewProduct from "./components/NewProduct";

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/login" component={Login} />
      <Route path="/new" component={NewProduct}/>
    </Router>
  );
}

export default App;
