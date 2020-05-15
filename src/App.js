import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import SingleItem from "./pages/SingleItem";
import ItemList from "./pages/ItemList";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" children={<Search/>}/>
            <Route path="/items/:id" children={<SingleItem/>}/>
            <Route path="/items" children={<ItemList/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
