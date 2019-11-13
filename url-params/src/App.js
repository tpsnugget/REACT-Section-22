import React from 'react';
import { Route, Switch } from "react-router-dom"
import Food from "./Food"
import Meal from "./Meal"
import FoodSearch from "./FoodSearch"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        <Route exact path="/" component={FoodSearch} />
        <Route render={() => <h1>404 Error Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
