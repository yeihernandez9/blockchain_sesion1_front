import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import imgblockchain from '../../assets/img/imgblockchain.png';
import './About.css'

const About = () => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" />
        <div>
            <img src={imgblockchain} className='imgBlog' /> 
        </div>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the 
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About
