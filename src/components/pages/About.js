import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function About() {
  return (
    <div className='page'>
      <Container className="justify-content-md-center" id="portfolio">
        <Row>
          <Col>
            <Row className='about title'>
              <h1>About Me</h1>
            </Row>
            <Row>
              <Image src={require('../../assets/VazEJHS0191art.jpg')} roundedCircle id="image" />
            </Row>
            <Row className='about'>
            A Full-Stack web developer, who is eager to apply my knowledge and skills, while gaining more valuable experience and understanding within the industry. I am well-versed in JavaScript and have the ability to work both front-end and back-end. I possess strong communication skills and have experience in working alongside a team to create high-quality applications. I also have a high level of determination and attention to detail when it comes to problem-solving and building a  website.            
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}