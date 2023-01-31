import React, { useState } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Enseignant from '../images/Enseignant.svg'



const AjouterEnseignant = () => {


  const [enseignant,setEnseignant] = useState({
    matricule:"",
    nom:"",
    prenom:"",
    email:"",
    password:"",
    grade:""
  });

  const {matricule,nom,prenom,email,password,grade} = enseignant;

  const onInputChange = (e) => {
    setEnseignant({ ...enseignant, [e.target.name]: e.target.value });
    
  }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6' className='my-4'>
          <img src={Enseignant} className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Ajouter Enseignant: </p>

          </div>

          <div className="divider d-flex align-items-center my-4">
          </div>
          <MDBInput wrapperClass='mb-4' placeholder='Matricule' type='text' size="md" name='matricule' value={matricule} onChange={(e) => onInputChange(e)}/>

          <MDBInput wrapperClass='mb-4' placeholder='Nom' type='text' size="md" name='nom' value={nom} onChange={(e) => onInputChange(e)}/>

          <MDBInput wrapperClass='mb-4' placeholder='Prénom' type='text' size="md" name='prenom' value={prenom} onChange={(e) => onInputChange(e)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Grade' type='text' size="md" name='grade' value={grade} onChange={(e) => onInputChange(e)}/>

          <MDBInput wrapperClass='mb-4' placeholder='Email address' type='email' size="md" name='email' value={email} onChange={(e) => onInputChange(e)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' type='password' size="md" name='password' value={password} onChange={(e) => onInputChange(e)}/>

          <div className='text-center text-md-end mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='md'>Ajouter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default AjouterEnseignant