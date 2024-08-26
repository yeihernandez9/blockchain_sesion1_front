import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddBlockchainModal = ({show, handleClose, addChain}) => {
  const [amount, setAmount] =useState('');
  const [nombre, setNombre] = useState('');

  const handleSaveBlock = () =>{
    const newBlockData = {
        data:{
          amount: amount,
          nombre: nombre
        }
      };
      addChain(newBlockData);
      handleClose();
  }
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Block</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type = "text"
                  value = {nombre}
                  onChange = {(e) => setNombre(e.target.value)}
                  placeholder='Nombre'
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveBlock}>
              Add Block
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddBlockchainModal
