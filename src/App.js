import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login"

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
