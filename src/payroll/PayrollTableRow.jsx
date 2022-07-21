import React from 'react'

const PayrollTableRow = ({employee , setInfoId}) => {

  let { id , employee_name , position , isClocked } = employee

  function handleClick() {
    setInfoId(id)
  }
  return (
    <tr onClick={handleClick}>
      <td>{id}</td>
      <td>{employee_name}</td>
      <td>{position}</td>
    </tr>
  )
}

export default PayrollTableRow