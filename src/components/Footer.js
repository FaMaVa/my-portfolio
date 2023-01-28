// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="#">
                            <FaGithub className='footerIcon'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <FaLinkedin  className='footerIcon'/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <FaInstagram  className='footerIcon'/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </footer>
        </>
    )
}