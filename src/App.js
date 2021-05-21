import AppNavBar from './components/headerComponents/AppNavBar'
import ViewContainer from './components/ViewComponents/ViewContainer'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className ="container">
      <AppNavBar/>
      <ViewContainer/>
    </div>
  );
}

export default App;
