import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login-page">
            <h1>Login-Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home</h1> {/*Default page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
