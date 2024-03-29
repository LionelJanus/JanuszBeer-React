import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ItemCount } from '../ItemCount/ItemCount';



export function MyVerticallyCenteredModal(props)  {
  const {Name,img,Description, Price} = props;
  
  return (

    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        <h4> {Name}  </h4>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='product-content' style={{display:"flex"}}>
        <img src={img} alt="Producto" />
        <p>Descripcion: {Description} </p>
        </div>
        <p>Precio: ${Price} </p>
       
      </Modal.Body>
      <Modal.Footer>
        <ItemCount />
      </Modal.Footer>
    </Modal>
  );
}