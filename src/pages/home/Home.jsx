import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { ApiContext } from '../../context/ApiContext'
import { Button, Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import AddBlockchainModal from '../../componentes/AddBlockchainModal';

const Home = () => {
  const {data, getChain, addChian} = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    if(getChain){
      getChain();
    }
  },[getChain]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  /*const handleAddBlock = () =>{
    console.log("AddBlock");
    const newBlockData = {
      data:{
        amount: 60,
        nombre: "se agregao el nuevo block"
      }
    };
    if(addChian){
      addChian(newBlockData);
    }
  };*/

  return (
    <Container>
    <div className='container'>
      <span className='title'>Bienvenido blockchain</span>
    </div>
    <Button onClick={handleShowModal}>Add Block</Button>
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
          {data.map((block, index)=>(
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
      <AddBlockchainModal show={showModal} handleClose={handleCloseModal} />
    </Container>
  )
}

export default Home
