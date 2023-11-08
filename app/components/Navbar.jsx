"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';
import "./style.css"

const Navbars = () => {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="nabbar mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <Image 
                            src="./DDC.png"
                            width={200}
                            height={150}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='custom'/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="sidebar w-50"
                        >
                        
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 navv l-2">
                                    <Nav.Link className='text-primary' href="#action1">Contact</Nav.Link>
                                    <Nav.Link className='text-primary' href="#action2">About</Nav.Link>
                                    <Nav.Link className='text-primary' href="#action3">Help </Nav.Link>
                                 
                                </Nav>
                                
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navbars;