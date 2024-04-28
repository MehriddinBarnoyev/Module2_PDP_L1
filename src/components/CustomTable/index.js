import React from 'react'
import { Table } from 'react-bootstrap'
import "./CustomTable.scss"

const thead=[ "#", "Ismi", "Familiyasi", "Username"]

export default function CustomTable(props) {
  return (
    <div>
         <Table striped bordered hover {...props} className='CustomTable'>
      <thead>
        <tr>
          {thead.map((item, index) =>(
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
      </tbody>
           </Table>
      
    </div>
  )
}
