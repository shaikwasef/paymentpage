import AppNavBar from './components/HeaderComponents/AppNavBar'
import ViewContainer from './components/ViewComponents/ViewContainer'
import React from 'react';
import Summary from "./components/SummaryComponents/Summary"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <AppNavBar/>
      <div className ="container">
      <Switch>
        <Route exact path="/">
            <ViewContainer/>
        </Route>
        <Route path="/summary">
            <Summary/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
