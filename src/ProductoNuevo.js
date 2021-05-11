
import './App.css';
import './Cuenta.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import qs from 'qs';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';



class ProductoNuevo extends Component {
 state ={
   codigo : '',
   nombre: '',
   color : '',
   marca: '',
   precio: 0,
   descripcion: '',
 }
 
 cambioCodigo = event => {
  this.setState( {
    codigo: event.target.value
  })
}

cambioNombre = event => {
  this.setState({
    nombre: event.target.value
  })
}

cambioColor= event =>{
  this.setState({
    color: event.target.value
  })
}

cambioMarca= event =>{
    this.setState({
      marca: event.target.value
    })
  }

cambioPrecio= event => {
  this.setState({
    precio: event.target.value
  })
}
cambioDescripcion= event =>{
    this.setState({
      descripcion: event.target.value
    })
  }

handleSubmit = event => {
  event.preventDefault();
  const pro = {
    Codigo: this.state.codigo,
    Nombre: this.state.nombre,
    Color: this.state.color,
    Marca: this.state.marca,
    Precio: this.state.precio,
    Descripcion: this.state.descripcion
  };

  pro: qs.stringify(pro)
 axios.post("http://localhost:5000/productos", pro)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
   
    
}

  render(){
  
  
  return (

 
    <div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Producto Nuevo</h4>
            <input type="text" id="Codigo" onChange={this.cambioCodigo}  class="form-control input-sm chat-input" placeholder="Codigo" />
            <br></br>
            <input type="text" id="Nombre" onChange={this.cambioNombre} class="form-control input-sm chat-input" placeholder="Nombre" />
            <br></br>
            <input type="text" id="Color" onChange={this.cambioColor} class="form-control input-sm chat-input" placeholder="Color" />
            <br></br>
            <input type="text" id="Marca"   onChange={this.cambioMarca} class="form-control input-sm chat-input" placeholder="Marca" />
            <br></br>
            <input type="number" id="Precio" onChange={this.cambioPrecio} class="form-control input-sm chat-input" placeholder="Precio" />
            <br></br>
            <input type="text" id="Descripcion" v onChange={this.cambioDescripcion} class="form-control input-sm chat-input" placeholder="Descripcion" />
            <br></br>
            <div class="wrapper">
            
          
            <span class="group-btn">  
              <a href="/registro" class="btn btn-secondary btn-md" onClick={this.handleSubmit}> Agregar Producto </a>
            </span>
                
               
            
            
           
            </div>
            </div>
        
        </div>
    </div>
</div>

        

    )
  }
}

export default ProductoNuevo;