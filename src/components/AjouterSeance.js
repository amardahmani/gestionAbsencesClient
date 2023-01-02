import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';


const AjouterSeance = () => {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='8' md='4' className='my-4'>
          <img  className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='6' md='8'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Ajouter Module: </p>

          </div>

          <div className="divider d-flex align-items-center my-4">
          </div>
          <MDBInput wrapperClass='mb-4' placeholder='code_module' type='text' size="md" name='code_module'/>

          <MDBInput wrapperClass='mb-4' placeholder='description' type='text' size="md" name='description'/>

          <MDBInput wrapperClass='mb-4' placeholder='coeif' type='text' size="md" name='coeif'/>
          
          <div className='text-center text-md-end mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='md'>Ajouter</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default AjouterSeance