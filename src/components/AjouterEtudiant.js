import React, { useState } from 'react'
import Etudiant from '../images/Etudiant.svg';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';



const AjouterEtudiant = () => {

  

  const [etudiant,setEtudiant] = useState({
    matricule: "",
    nom:"",
    prenom:"",
    email: "",
    password:"",
    specialite:"",
    groupe:"",
    niveau:""
  });

  const {matricule,nom,prenom,email,password,specialite,groupe,niveau} = etudiant;
  const onInputChange = (e) => {
    setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
  }

  const ajouterEtudiant = () => {
    
  }

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
          <MDBInput wrapperClass='mb-4' placeholder='Matricule' type='text' size="md" name='matricule' 
          value={matricule} onChange={onInputChange}/>

          <MDBInput wrapperClass='mb-4' placeholder='Nom' type='text' size="md" name='nom'
          value={nom} onChange={onInputChange}/>

          <MDBInput wrapperClass='mb-4' placeholder='Prénom' type='text' size="md" name='prenom'
          value={prenom} onChange={onInputChange}/>
          <MDBInput wrapperClass='mb-4' placeholder='specialite' type='text' size="md" name='specialite'
          value={specialite} onChange={onInputChange}/>
          <MDBInput wrapperClass='mb-4' placeholder='groupe' type='text' size="md" name='groupe'
          value={groupe} onChange={onInputChange}/>
          <MDBInput wrapperClass='mb-4' placeholder='niveau' type='text' size="md" name='niveau'
          value={niveau} onChange={onInputChange}/>

          <MDBInput wrapperClass='mb-4' placeholder='Email address' type='email' size="md" name='email'
          value={email} onChange={onInputChange}/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' type='password' size="md" name='password'
          value={password} onChange={onInputChange}/>

          <div className='text-center text-md-end mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='md'>Ajouter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default AjouterEtudiant