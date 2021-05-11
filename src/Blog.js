
import './App.css';
import './Carrito.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody,ModalHeader, FormGrupo, ModalFooter} from  'reactstrap';
import axios from 'axios';

class Blog extends React.Component {
  state={
    reseñas:[]
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/blog`)
      .then(res => {
        const reseñas = res.data;
        this.setState({ reseñas});
      })
      
  }
  render (){return (
  <>
        <Container>
        <br />
          <br />
          <br />
          <Table>
         

            <tbody>
              {this.state.reseñas.map((dato) => (
                <tr key={dato.Id}>
                  <td>{dato.Usuario}</td>
                  <td>{dato.Comentario}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <div class="wrapper">
            <span class="group-btn">     
                <a href="/reseña" class="btn btn-secondary btn-md"> Agregar Reseña </a>
            </span>
        </div>
  </>
    );
  }}

export default Blog;



