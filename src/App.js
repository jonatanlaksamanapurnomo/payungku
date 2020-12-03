import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./view/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}  exact></Route>
          <Route path="/about" component={Home} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
