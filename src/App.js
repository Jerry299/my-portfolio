import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/stateless components/About";
import MyWorks from "./components/stateless components/MyWorks";
import Skills from "./components/stateless components/Skills";
import ContactMe from "./components/statefulComponents/ContactMe";
import Header from "./components/stateless components/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/myworks" exact component={MyWorks} />
                <Route path="/contact" exact component={ContactMe} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
