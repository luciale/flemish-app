import React from 'react';
import './Inicio.css';
import Productos_nuevos from './assets/img/productos_nuevos.png';
import Producto from './assets/img/producto.png';
import Producto1 from './assets/img/producto1.png';
import Producto2 from './assets/img/producto2.png';
import Producto3 from './assets/img/producto3.png';
import Logo_flemish from './assets/img/logo_flemish.png';
import Flemish from './assets/img/Flemish.png';
import Carretilla from './assets/img/carreta.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header1.js';
const Inicio = () => {
    return (
        <>
       
        
    <nav class="navbar fixed-top navbar-expand-md flex-nowrap navbar-new-top">  
       <ul className ="Menu-img">
       <img className = "producto_img" src={Producto}></img>
        <img className = "producto_img" src={Producto1}></img>
        <img className = "producto_nuevo_img" src={Productos_nuevos}></img>
        <img className = "producto_img" src={Producto2}></img>
        <img className = "producto_img" src={Producto3}></img>
       </ul>
       </nav>
      
           </>
    );
  }
  
  export default Inicio;
  