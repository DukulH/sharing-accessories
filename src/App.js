import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Deals from "./components/deals/Deals";
import Home from "./components/home/Home";
import Work from "./components/work/Work";

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/works">
          <Work />
        </Route>
        <Route path="/deals">
          <Deals />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
