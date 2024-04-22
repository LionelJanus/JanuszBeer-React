import React, { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { CartContext } from "../Context/CartContext";
import { CartItemList } from "../CartItemList/CartItemList";
import { Link } from "react-router-dom";




function CanvasCart() {
  const [show, setShow] = useState(false);
  const { cartQuantity } = useContext(CartContext);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          width: "30px",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "30px",
        }}
      >
        🛒
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop={false}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Tu Carrito de Compras </Offcanvas.Title>  
        </Offcanvas.Header>
        <Offcanvas.Body >
        {cartQuantity > 0 ? (
            <CartItemList />
          ) : (
            <div>
              <p>Carrito Vacio 🤔</p>
              <Link to="/"><Button variant="primary">Ir a Comprar</Button></Link>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default CanvasCart;
