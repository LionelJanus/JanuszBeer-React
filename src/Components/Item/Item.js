import { MyVerticallyCenteredModal } from "../Modal/Modal";
import "./Item.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const Item = ({ Name, img, Stock, Price, Category,Description }) => {
  
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card">
      <h3> {Name} </h3>
      <img className="card--img" src={img} />
      <p> Precio: $ {Price}</p>
      <p> Stock: {Stock} </p>
      <p> Origen: {Category} </p>
      <Button variant="primary" onClick={() => setModalShow(true)}>Ver Mas</Button>
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
