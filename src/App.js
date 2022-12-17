import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
