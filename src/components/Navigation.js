import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand}  id="header" className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#" className="heading">Faith Vaz</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton  className="navigation">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="heading">
                    Faith Vaz
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navigation">
                <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    <div className="navigation">About Me</div>
                </Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    <div className="navigation">Portfolio</div>
                </Nav.Link>
                <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    <div className="navigation">Contact</div>
                </Nav.Link>
                <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    <div className="navigation">Skills</div>
                </Nav.Link>
            </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        </>
    );
}