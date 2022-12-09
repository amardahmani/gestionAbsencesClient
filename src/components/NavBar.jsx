import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import AjouterEnseignant from './AjouterEnseignant';
import AjouterEtudiant from './AjouterEtudiant';
import AjouterModule from './AjouterModule';
import FaireAppel from './FaireAppel';
import ListEnseignant from './ListEnseignant';
import ListEtudiants from './ListEtudiants';
const NavBar = () => {

  
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
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div className="container mt-3">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile'/> 
        <Route path='/enseignants' element={<ListEnseignant />} />
        <Route path='/etudiants' element={<ListEtudiants />} />
        <Route path='/faireAppel' element={<FaireAppel />} />
        <Route path="/enseignants/ajouter" element={<AjouterEnseignant />} />
        <Route path="/etudiants/ajouter" element={<AjouterEtudiant />}/>
        <Route path='/modules/ajouter' element={<AjouterModule />} />
      </Routes>
      
    </div>
    
    </>
  )
}

export default NavBar