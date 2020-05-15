import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Item from "./pages/item";
import Items from "./pages/items";
import Index from "./pages";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/items">Items</Link>
                    </li>
                    <li>
                        <Link to="/items/1">Item 1</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/" children={<Index/>}/>
                    <Route path="/items/:id" children={<Item/>}/>
                    <Route path="/items" children={<Items/>}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
