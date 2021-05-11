
import './App.css';
import './Cuenta.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Compra= () => {
  return (
 <>
 
    <div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Ingresa tus Datos de Compra</h4>
            <input type="text" id="Nombre" class="form-control input-sm chat-input" placeholder="Nombre Completo"/>
            <br></br>
            <input type="text" id="Direccion" class="form-control input-sm chat-input" placeholder="Dirección Exacta" />
            <br></br>
            <input type="text" id="Telefono" class="form-control input-sm chat-input" placeholder="Número de Teléfono" />
            <br></br>
            <input type="text" id="Correo" class="form-control input-sm chat-input" placeholder="Correo" />
            <div class="wrapper">
                <br></br>
            <span class="group-btn">     
                <a href="#" class="btn btn-secondary btn-md "> Confirmar Compra  </a>
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

export default Compra;