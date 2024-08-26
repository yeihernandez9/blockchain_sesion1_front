import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarCustomer from '../componentes/NavBarCustomer'
import { Container } from 'react-bootstrap'

const LayoutPublic = () => {
  return (
    <div>
      <NavBarCustomer />
      <Container className='container'>
        <Outlet />
      </Container>
    </div>
  )
}

export default LayoutPublic
