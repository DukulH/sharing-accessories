import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path="*">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/how-it-works">
          
        </Route>
        <Route path="/">
      
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
