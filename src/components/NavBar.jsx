import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";
import Login from '../pages/Login';

const NavBar = (props) => {

  let etudiant = props.etudiant;

  console.log(etudiant);
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="">
      <Container>
        <Navbar.Brand href="#home">Gestion des absences</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="#">modules</Nav.Link>
            <Nav.Link as={Link} to="/enseignants">enseignants</Nav.Link>
            <Nav.Link as={Link} to="/etudiants">etudiant</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              se déconnecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
      
    
    
    </>
  )
}

export default NavBar