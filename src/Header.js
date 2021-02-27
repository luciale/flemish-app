import './Header.css';
import React from 'react';


import Flemish from './assets/img/Flemish.png';
import Carretilla from './assets/img/carreta.png';

import App from './App.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Header= () => {
    return (
      <>
     <div class="header">
  <a href="/" class="logo"><img className = "logo" src={Flemish}></img></a>
  
  <div class="header-right">
    <a href="/productos">Productos</a>
    <a href="/blog">Blog</a>
    <a href="/cuenta">Cuenta</a>
    <a href="/carrito"><img className= "logo1" src ={Carretilla}></img></a>
</div> 
</div>
      
   
      </>
    );
  }
  
  export default Header;
  