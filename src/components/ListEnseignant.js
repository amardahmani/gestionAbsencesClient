import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


const ListEnseignant = () => {
  return (
<div>
    <h3 align="center">List Enseignants</h3>
    
    <Table striped bordered hover>
      <thead className='bg-primary text-white'>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Module</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@mdo</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@mdo</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@mdo</td>
          <td>@twitter</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
</div>
  )
}

export default ListEnseignant