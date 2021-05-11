
import './App.css';
import './Cuenta.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import axios from 'axios';
import cookies from 'universal-cookie';

class Cuenta extends React.Component {
  state={
   usuarios: [],
   usuario: '',
   contraseña: ''
  }
 
  
  cambioUsuario = event => {
    this.setState({
      usuario: event.target.value
    })
  }
  cambioContraseña = event => {
    this.setState({
      contraseña: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.get(`http://ec2co-ecsel-ywfyzu48p1rx-1028345273.us-east-2.elb.amazonaws.com:8080/usuarios`)
    .then(res => {
      const usuarios = res.data;
      this.setState({ usuarios});
    })
    for (const [index, value] of this.state.usuarios.entries()) {
      if(value.Usuario == this.state.usuario && value.Contraseña == this.state.contraseña){
        
        cookies.set('id', value.Usuario, {path :"/"});
      }

    }
   
  }
  render(){
  return (
 <>
 
    <div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Bienvenida</h4>
            <input type="text" id="Usuario" onChange={this.cambioUsuario} class="form-control input-sm chat-input" placeholder="Usuario" />
            <br></br>
            <input type="password" id="Contraseña" onChange={this.cambioContraseña} class="form-control input-sm chat-input" placeholder="Contraseña" />
            <br></br>
           
            <div class="wrapper">
            <span class="group-btn">     
                <a href="#" class="btn btn-secondary btn-md" onClick={this.handleSubmit}>Iniciar Sesión </a>
            </span>
            <br></br>
            <br></br>
          
            <span class="group-btn">  
              <a href="/registro" class="btn btn-secondary btn-md"> Crear Cuenta </a>
            </span>
                
               
            
            
           
            </div>
            </div>
        
        </div>
    </div>
</div>

  

    
        
  </>
    );
  }}

export default Cuenta;



