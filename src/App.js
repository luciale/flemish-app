import './App.css';
import Header from './Header.js';
import Inicio from './Inicio.js';
import Productos from './Productos.js';
import Blog from './Blog.js';
import CrearCuenta from './CuentaNueva.js';
import Carrito from './Carrito.js';
import Compra from './Compra.js';
import Reseña from './Reseña.js';
import ProductoNuevo from './ProductoNuevo.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import Cuenta from './Cuenta.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Header1 from './Header1.js';

const App = () => {
  return (
    
    <Router>
      
      
     <div>
       <Header1/>
     </div>
    <div class= "div-login">
    <Switch>
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
      <Route path="/registro" exact>
        <CrearCuenta/>
      </Route>
      <Route path="/compra" exact>
        <Compra/>
      </Route>
      <Route path="/reseña" exact>
        <Reseña/>
      </Route>
      <Route path="/productonuevo" exact>
        <ProductoNuevo/>
      </Route>
    </Switch>
   </div>
    </Router>
      
  );
}

export default App;
