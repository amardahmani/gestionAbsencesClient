import React from 'react'
import Etudiant from '../images/Etudiant.svg';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';



const AjouterEtudiant = () => {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='5' className=''>
          <img src={Etudiant} className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='7'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Ajouter Etudiant: </p>

          </div>

          <div className="divider d-flex align-items-center my-4">
          </div>
          <MDBInput wrapperClass='mb-4' placeholder='Matricule' type='text' size="md" name='matricule'/>

          <MDBInput wrapperClass='mb-4' placeholder='Nom' type='text' size="md" name='nom'/>

          <MDBInput wrapperClass='mb-4' placeholder='Prénom' type='text' size="md" name='prenom'/>
          <MDBInput wrapperClass='mb-4' placeholder='Module' type='text' size="md" name='module'/>

          <MDBInput wrapperClass='mb-4' placeholder='Email address' type='email' size="md" name='email'/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' type='password' size="md" name='password'/>

          <div className='text-center text-md-end mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='md'>Ajouter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default AjouterEtudiant