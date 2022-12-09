import React from 'react'
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBCheckbox } from 'mdb-react-ui-kit';
const FaireAppel = () => {
  return (
    <>

    <h2>Faire Appel</h2>

    <MDBTable align='middle'>
    <MDBTableHead className='bg-primary text-white'>
      <tr>
        <th scope='col'>
          #
        </th>
        <th scope='col'>Lorem</th>
        <th scope='col'>Ipsum</th>
        <th scope='col'>Dolor</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr>
        <th scope='col'>
          <MDBCheckbox></MDBCheckbox>
        </th>
        <td>Sit</td>
        <td>Amet</td>
        <td>Consectetur</td>
      </tr>
      <tr>
        <th scope='col'>
          <MDBCheckbox></MDBCheckbox>
        </th>
        <td>Adipsicing</td>
        <td>Elit</td>
        <td>Sint</td>
      </tr>
      <tr>
        <th scope='col'>
          <MDBCheckbox></MDBCheckbox>
        </th>
        <td>Hic</td>
        <td>Fugiat</td>
        <td>Temporibus</td>
      </tr>
    </MDBTableBody>

    
  </MDBTable>
  <div className='d-flex flex-row-reverse'>
            <MDBBtn className="" size='lg'>Enregistrer</MDBBtn>
    </div>
  </>
  )
}

export default FaireAppel