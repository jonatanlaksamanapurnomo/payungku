import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./view/Home";
import Detail from "./view/Detail";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={Home}></Route>
                <Route path="/detail/:kota" component={Detail}></Route>
            </Switch>
        </Router>
    );
}

export default App;
