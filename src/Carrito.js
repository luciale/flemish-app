
import './App.css';
import './Carrito.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import {Table, Button, Container, Modal, ModalBody,ModalHeader, FormGrupo, ModalFooter} from  'reactstrap';

const data=[
  { Id: 1, Producto: "Paleta de Sombras", Marca: "Colourpop", Cantidad: 2, Precio: 200.00},
  { Id: 2, Producto: "Delineador", Marca: "Colourpop", Cantidad: 1, Precio: 125.00},
  { Id: 3, Producto: "Pomada de Cejas", Marca: "Moprhe", Cantidad: 1, Precio: 100.00},
];
class Carrito extends React.Component {
  state={
    data:data
  }
  render (){return (
  <>
        <Container>
        <br />
   
      
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Precio Unidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
          </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.Id}>
                  <td>{dato.Id}</td>
                  <td>{dato.Producto}</td>
                  <td>{dato.Marca}</td>
                  <td>{dato.Cantidad}</td>
                  <td>{dato.Precio}</td>
                  <td>{dato.Precio*dato.Cantidad}</td>
                  <td>
                    <Button>
                      Editar
                    </Button>
                    <Button>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <br />
        <div class="wrapper">
            <span class="group-btn">     
                <a href="/compra" class="btn btn-secondary btn-md"> Comprar </a>
            </span>
        </div>

  </>
    );
  }}

export default Carrito;


