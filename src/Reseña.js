
import './App.css';
import './Cuenta.css';
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
class Reseña extends Component {
  state ={
    usuario : '',
    comentario: '',
  }
 
  cambioUsuario = event => {
    this.setState( {
      usuario: event.target.value
    })
  }
  cambioComentario = event => {
    this.setState( {
      comentario: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    const rese = {
      Usuario: this.state.usuario,
      Comentario: this.state.comentario
    };

    rese: qs.stringify(rese)
 axios.post("http://ec2co-ecsel-ywfyzu48p1rx-1028345273.us-east-2.elb.amazonaws.com:8080/blog", rese)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log("A PROBAR EL POST")
  }
  
  render(){
    return (
      <>
      
         <div class="container">
         <div class="row">
             <div class="col-md-offset-5 col-md-3">
                 <div class="form-login">
                 <h4> Ingresa tu Comentario </h4>
                 <input type="text" id="Usuario" onChange={this.cambioUsuario} class="form-control input-sm chat-input" placeholder="Usuario"/>
                 <br></br>
                 <input type="text" id="Comentario" onChange={this.cambioComentario} class="form-control input-sm chat-input" placeholder="Escribe Aquí tu Comentario"/>
                 <br></br>
                 
                 <div class="wrapper">
                     <br></br>
                 <span class="group-btn">     
                     <a href="#" class="btn btn-secondary btn-md " onClick={this.handleSubmit}> Agregar </a>
                 </span>
                 <div class="wrapper">
                 
                 </div>
                
                 </div>
                 </div>
             
             </div>
         </div>
     </div>
     
       
     
         
             
       </>
         );
  }
 
  }

export default Reseña;