
import './App.css';
import Header from './Header.js';
import Inicio from './Inicio.js';
import Productos from './Productos.js';
import Blog from './Blog.js';
import Carrito from './Carrito.js';

import React, {Component} from 'react';
import Cuenta from './Cuenta.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      
      
      <div>
      <Header/>
      </div>
      <Switch>
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/productos" exact>
          <Productos/>
        </Route>
        <Route path="/blog" exact>
          <Blog/>
        </Route>
        <Route path ="/carrito" exact>
          <Carrito/>
        </Route>
        <Route path="/cuenta" exact>
          <Cuenta/>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
