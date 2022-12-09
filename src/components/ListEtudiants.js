import React from 'react'
import Table from 'react-bootstrap/Table';

const ListEtudiants = () => {
  return (
    <div>
        <h1>List Etudiants</h1>

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

export default ListEtudiants