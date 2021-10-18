import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
            <CheckOut />
          </Route>
          <Route path="/login-page">
            <h1>Login-Page</h1>
          </Route>
          <Route path="/location">
            <h1>Location</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/*Default page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
