import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function About() {
  return (
    <div className='page'>
      <Container className="justify-content-md-center">
        <Row>
          <Col>
          <Row className='title'>
            About Me
          </Row>
          <Row>
            <Image src={require('../../assets/IMG_9407.JPG')} rounded />
          </Row>
          <Row>
          PARAGRAPH
          </Row>
             </Col>
        </Row>
      </Container>

    </div>
  );
}