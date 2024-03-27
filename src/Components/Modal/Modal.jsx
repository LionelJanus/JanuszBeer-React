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
        <div>{img}</div>
      <Modal.Body>
        {Price}
        <p> {Description} </p>
      </Modal.Body>
      <Modal.Footer>
        <ItemCount />
      </Modal.Footer>
    </Modal>
  );
}