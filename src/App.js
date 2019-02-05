import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/static/About";
import Todos from "./components/todo/Todos";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Todos} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
