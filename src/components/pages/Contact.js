import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className='page'>
      <Container className="justify-content-md-center">
        <h1 id="contactTitle">Contact Me</h1>
        <Form id="form">
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button id="formButton" type="submit">
          Submit
        </Button>
        </Form>
      </Container>

    </div>
  );
}