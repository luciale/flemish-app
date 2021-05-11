import './Header1.css';
import React from 'react';


import Flemish from './assets/img/Flemish.png';
import Carretilla from './assets/img/carreta.png';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header1= () => {
    return (
      <>

  
<nav class="navbar fixed-top navbar-expand-md flex-nowrap navbar-new-top">
<a href="/" class="logo"><img className = "logo" src={Flemish}></img></a>
           
            <ul class="nav navbar-nav mr-auto"></ul>
            <ul class="navbar-nav flex-row">
                <li class="nav-item">
                <a class= "nav-link px-2" href="/productos">Productos</a>
                </li>
                <li class="nav-item">
                <a class= "nav-link px-2" href="/blog">Blog</a>
                </li>
                <li class="nav-item">
                <a class= "nav-link px-2" href="/cuenta">Cuenta</a>
                </li>
                <li class="nav-item">
                <a  href="/carrito"><img className= "logo1" src ={Carretilla}></img></a>
                
                </li>
         
            </ul>
           
        </nav>
        
     
    


     </> 
    );
  }
    
  export default Header1;