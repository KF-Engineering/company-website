import React from 'react'
import './Contact.scss'

import {Form, Button,Container } from 'react-bootstrap'; 

function Contact() {
    return (
        <div className="contact" id='contact'>
          <h1 className="headline" >Contact</h1>
            <Container>
                 <div className="input-fields">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
</Form>
            </div>

<div className="button">
<Button variant="success">send</Button>{' '}</div>
                
                
                
                 </Container>
           

        </div>
    )
}

export default Contact
