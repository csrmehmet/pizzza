import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Ana sayfa bileşeni (Home)
import Order from './pages/Order'; // Sipariş oluşturma sayfası bileşeni

// App bileşeni (function olarak yazıldı)
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/siparis-olustur" component={Order} />
      </Switch>
    </Router>
  );
}

export default App;