import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/thank" component={Result} />
    </Router>
  );
}

export default App;
