
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import {Table, Button, Container, Modal, ModalBody,ModalHeader, FormGrupo, ModalFooter} from  'reactstrap';
import axios from 'axios';
import qs from 'qs';
class Productos extends React.Component {
  state={
    productos:[],
    nombre: '',
    color: '',
    marca: '',
    precio: '',
    descripcion: ''
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
  
  handleChange = event => {
    this.setState({ codigo: event.target.value });
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/productos`)
      .then(res => {
        const productos = res.data;
        this.setState({ productos});
      })
      
  }
  handleSubmitDelete (producto) {
    axios.delete(`http://localhost:5000/productos/${producto.Codigo}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  handleSubmitEdit (codigo) {
    const pro = {
      Codigo: codigo,
      Nombre: this.state.nombre,
      Color: this.state.color,
      Marca: this.state.marca,
      Precio: this.state.precio,
      Descripcion: this.state.descripcion
    };
    pro: qs.stringify(pro)
    axios.put(`http://localhost:5000/productos/${codigo}`, pro)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render (){return (
  <>
        <Container>
        <br />
   
        <span class="group-btn">  
              <a href="/productonuevo" class="btn btn-secondary btn-md" onClick={this.handleSubmit}> Agregar Producto </a>
            </span>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Color</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th></th>
              </tr>
          </thead>

            <tbody>
              {this.state.productos.map((dato) => (


                <tr key={dato.Codigo}>
                  <td> <input type="text" id="Nombre" onChange={this.cambioNombre}  class="form-control input-sm chat-input" defaultValue={dato.Nombre} /></td>
                  <td><input type="text" id="Color" onChange={this.cambioColor}  class="form-control input-sm chat-input" defaultValue={dato.Color} /></td>
                  <td><input type="text" id="Marca" onChange={this.cambioMarca}  class="form-control input-sm chat-input" defaultValue={dato.Marca} /></td>
                  <td><input type="number" id="Precio" onChange={this.cambioPrecio}  class="form-control input-sm chat-input" defaultValue={dato.Precio} /></td>
                  <td><input type="text" id="Descripcion" onChange={this.cambioDescripcion}  class="form-control input-sm chat-input" defaultValue={dato.Descripcion} /></td>
                  <td>
                  <tr><Button  onClick={() => { this.handleSubmitEdit (dato.Codigo)}}>
                      Editar
                    </Button></tr>
                    <br></br>
                  <tr>
                  <Button  onClick={() => { this.handleSubmitDelete(dato) }}>
                     Eliminar
                    </Button>
                  </tr>
    
    
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
  </>
    );
  }}

export default Productos;

