import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ItemList from "./pages/ItemList";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            {<Search/>}
          </Route>
          <Route path="/items/:id">
            {<ItemDetails/>}
          </Route>
          <Route path="/items">
            {<ItemList/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
