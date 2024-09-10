import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; 
import PizzaOrderForm from './pages/PizzaOrderForm'; 


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/siparis-olustur" component={PizzaOrderForm} />
      </Switch>
    </Router>
  );
}

export default App;