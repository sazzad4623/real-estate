import React from "react";

import Home from "./components/home";
import Contact from "./components/contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
