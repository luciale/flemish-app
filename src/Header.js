import './Header.css';
import React from 'react';
import Nav from 'react-dom';
import Flemish from './assets/img/Flemish.png';

import App from './App.js';

const Header= () => {
    return (
      <>
      <div className="Header">
      <Nav></Nav>
  
        <div className="App-header1">
        <img className = "logo" src={Flemish}></img>
        <nav className ="App-div1">
          <p>Probando</p>
        </nav>
        <div className ="App-div1">
          <p>HOLA</p>
        </div>
        
        
    
        
      
        </div>
      </div>
      </>
    );
  }
  
  export default Header;
  