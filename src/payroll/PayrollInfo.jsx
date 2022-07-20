import React from 'react'
import { Button, NavLink } from 'react-bootstrap'

const PayrollInfo = ({employees , infoId }) => {

  const employee = employees.filter(employee => parseInt(employee.id) === parseInt(infoId))

  let {id , employee_name , address , email , phone_number , position , wage , hours_worked , hours_ytd , appointments} = employee[0]
  console.log(employee)
  return (
    <>
      <h4 className='pt-4'>{employee_name}</h4>
      <br></br>
      <p>Contact Information</p>
      <ul className='no-bullets'>
        <li>Address: {address}</li>
        <li>Phone Number: {phone_number}</li>
        <li>Email: {email}</li>
      </ul>
      <p>Employee Information</p>
      <ul className='no-bullets'>
        <li>ID: {id}</li>
        <li>Position: {position}</li>
        <li>Wage: ${wage}</li>
        <li>Hours: {hours_worked}</li>
        <li>Hours YTD: {hours_ytd}</li>
        <li></li>
      </ul>
        <NavLink className="text-left pb-4" href={`/schedule/${employee_name}`}>{appointments.length} Appointments</NavLink>
        <Button>Send Direct Deposit</Button>
    </>
  )
}

export default PayrollInfo