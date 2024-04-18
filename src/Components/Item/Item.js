import { MyVerticallyCenteredModal } from "../Modal/Modal";
import "./Item.css";
import React, { useState } from "react";
import { useCount } from "../Hooks/useCount";
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ Name, img, Stock, Price, Category,Description }) => {
  const [modalShow, setModalShow] = useState(false);
 
  return (
    <div className="card">
      <h3> {Name} </h3>
      <img className="card--img" src={img} />
      <p> Stock: {Stock} </p>
      <p> Origen: {Category} </p>
      <p> Precio: $ {Price}</p>
     
      <Button variant="primary" className="btn-info" onClick={() => setModalShow(true)}>Mas Informacion</Button>
      <div className="addCard">
      <ItemCount/>
      </div>
      
      {modalShow && (
        <MyVerticallyCenteredModal
          Name={Name}
          img={img}
          Description={Description}
          Price={Price}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};
