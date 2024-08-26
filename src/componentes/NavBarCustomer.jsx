import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBarCustomer = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Blockchain</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBarCustomer
