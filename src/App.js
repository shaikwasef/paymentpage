import AppNavBar from './components/HeaderComponents/AppNavBar'
import ViewContainer from './components/ViewComponents/ViewContainer'
import React , {useEffect} from 'react';
import Summary from "./components/SummaryComponents/Summary"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {

  useEffect(() => {
    const itemCart = JSON.parse(sessionStorage.getItem('itemCart'));
    if(!itemCart){
      const cart = new Map();
      sessionStorage.setItem('itemCart',JSON.stringify([...cart]));
    }   
  },[]);


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
