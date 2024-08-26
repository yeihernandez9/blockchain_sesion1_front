import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { ApiContext } from '../../context/ApiContext';
import { Button, Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBlockchainModal from '../../componentes/AddBlockchainModal';
import Table from 'react-bootstrap/Table';

const Home = () => {
  const { data, getChain, addChian, validateChain, isValid } = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (getChain) {
      getChain();
    }
  }, [getChain]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleValidateChain = () => {
    if (validateChain) {
      validateChain();
    }
  };

  return (
    <>
      <Button onClick={handleShowModal}>Add Block</Button>
      <Button onClick={handleValidateChain}>Validate Chain</Button>
      {isValid !== null && (
        <Alert variant={isValid ? 'success' : 'danger'}>
          Blockchain is {isValid ? "valid" : "invalid"}
        </Alert>
      )}
      <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Timestamp</th>
            <th>Data</th>
            <th>Previus Hash</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((block, index) => (
            <tr key={index}>
              <td>{block.index}</td>
              <td>{block.timestamp}</td>
              <td>{JSON.stringify(block.data)}</td>
              <td>{block.previousHash}</td>
              <td>{block.hash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddBlockchainModal show={showModal} handleClose={handleCloseModal} addChain={addChian} />
    </>
  )
}

export default Home;