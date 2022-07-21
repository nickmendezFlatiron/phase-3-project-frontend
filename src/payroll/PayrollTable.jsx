import React from "react";

import { Table } from "react-bootstrap";
import PayrollTableRow from "./PayrollTableRow";

import uuid from 'react-uuid'

const PayrollTable = ({employees , setInfoId}) => {

  
  const listOfEmployees = employees.map(employee => <PayrollTableRow employee={employee} key={uuid()} setInfoId={setInfoId}/>)

  return (
    <Table className='overflow border shadow' striped hover>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Position</th>
      </thead>
      <tbody>
        {listOfEmployees}
      </tbody>
  </Table>
    )
}

export default PayrollTable