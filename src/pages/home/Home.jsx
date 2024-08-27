import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { ApiContext } from '../../context/ApiContext';
import { Button, Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBlockchainModal from '../../componentes/AddBlockchainModal';
import Table from 'react-bootstrap/Table';

const Home = () => {
  const { data, getChain, addChian, validateChain, isValid, getBlock } = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (getChain) {
      console.log("bloc");
      getChain();
    }
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleValidateChain = () => {
    if (validateChain) {
      validateChain();
    }
  };

  const handleGetBlock = async (indexedDB) =>{
    console.log(indexedDB);
    await getBlock(indexedDB)
  }

  return (
    <Container>

    <div className='container-button'>
     <Button onClick={handleShowModal} >Add Block</Button>
    </div>
    <div style={{ overflowX: 'auto' }}>
    <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Timestamp</th>
            <th>Data</th>
            <th>Previus Hash</th>
            <th>Hash</th>
            <th>Option</th>
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
              <td>
                <Button variant="success" onClick={() => handleGetBlock(block.index)}>Consultar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
      
      <AddBlockchainModal show={showModal} handleClose={handleCloseModal} addChain={addChian} />
    </Container>
  )
}

export default Home;