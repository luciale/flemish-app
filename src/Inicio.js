import React from 'react';
import './Inicio.css';
import Productos_nuevos from './assets/img/productos_nuevos.png';
import Producto from './assets/img/producto.png';
import Producto1 from './assets/img/producto1.png';
import Producto2 from './assets/img/producto2.png';
import Producto3 from './assets/img/producto3.png';
import Logo_flemish from './assets/img/logo_flemish.png';
const Inicio = () => {
    return (
        <>
     <div className= "App-Inicio">
        
       <ul className ="Menu-img">
       <img className = "producto_img" src={Producto}></img>
        <img className = "producto_img" src={Producto1}></img>
        <img className = "producto_nuevo_img" src={Productos_nuevos}></img>
        <img className = "producto_img" src={Producto2}></img>
        <img className = "producto_img" src={Producto3}></img>
       </ul>
      </div>
     
        </>
    );
  }
  
  export default Inicio;
  