
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



class CrearCuenta extends Component {
 state ={
   usuario : '',
   nombre: '',
   correo: '',
   contraseña: '',
 }
 
 cambioUsuario = event => {
  this.setState( {
    usuario: event.target.value
  })
}

cambioNombre = event => {
  this.setState({
    nombre: event.target.value
  })
}

cambioCorreo= event =>{
  this.setState({
    correo: event.target.value
  })
}

cambioContraseña= event => {
  this.setState({
    contraseña: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault();
  const us = {
    Usuario: this.state.usuario,
    Nombre: this.state.nombre,
    Correo: this.state.correo,
    Contraseña: this.state.contraseña
  };

  us: qs.stringify(us)
 axios.post("http://localhost:5000/usuarios", us)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log("A PROBAR EL POST")
   
    
}
/*
  componentDidMount=() =>{
    axios.get("/usuarios").then(res =>{
      const usuarios = res.data;
      this.setState({usuarios});
    });
  };
 */
  render(){
  
  
  return (

 
    <div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Bienvenida</h4>
            <input type="text" id="Usuario"  class="form-control input-sm chat-input" placeholder="Usuario" />
            <br></br>
            <input type="text" id="Nombre" value={this.state.nombre} onChange={this.cambioNombre} class="form-control input-sm chat-input" placeholder="Nombre" />
            <br></br>
            <input type="text" id="Correo" value={this.state.correo} onChange={this.cambioCorreo} class="form-control input-sm chat-input" placeholder="Correo" />
            <br></br>
            <input type="password" id="Contraseña"  value={this.state.contraseña} onChange={this.cambioContraseña} class="form-control input-sm chat-input" placeholder="CONTRASEÑA" />
            <br></br>
           
            <div class="wrapper">
            <span class="group-btn">     
                <a href="/cuenta" class="btn btn-secondary btn-md"  >Iniciar Sesión </a>
            </span>
            <br></br>
            <br></br>
          
            <span class="group-btn">  
              <a href="/registro" class="btn btn-secondary btn-md" onClick={this.handleSubmit}> Crear Cuenta </a>
            </span>
                
               
            
            
           
            </div>
            </div>
        
        </div>
    </div>
</div>

        

    )
  }
}

export default CrearCuenta;