import React,{useState} from 'react';
import {CartContext} from "../Context/CartContext"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button  from 'react-bootstrap/Button';

function CanvasCart() {
  const [show, setShow]= useState(false)
  

  const handleShow = () =>{
    setShow(true);
  };

  const handleClose = () =>{
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}
      style={{
        width:"30px",
        backgroundColor:"transparent",
        border:"none",
        fontSize:"25px"
      }}
      >🛒</Button>
      <Offcanvas show={show} onHide={handleClose} placement='end' backdrop={false} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Tu Carrito de Compras </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>  </Offcanvas.Body>
      </Offcanvas>
    </div>

  );
}
export default CanvasCart;


