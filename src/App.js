import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

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
            <h1>Home</h1> {/*Default page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
