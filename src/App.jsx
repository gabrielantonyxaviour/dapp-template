import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Connect from "./components/ConnectButton";
import CreateOffer from "./pages/CreateOffer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateOffer} />
        <Route exact path="/offer" component={Offer} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
