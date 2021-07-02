import React from "react";
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/checkout/:someRandomId/page">
            <h1>Checkout</h1>
          </Route>
          <Route path = "/login">
            <h1>Login page</h1>
          </Route>
          <Route path = "/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
