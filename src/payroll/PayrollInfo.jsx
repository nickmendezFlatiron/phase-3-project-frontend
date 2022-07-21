import React from 'react'
import { Button, NavLink } from 'react-bootstrap'

const PayrollInfo = ({employees , infoId , setEmployees}) => {

  const employee = employees.filter(employee => parseInt(employee.id) === parseInt(infoId))

  let {id , employee_name , address , email , phone_number , position , wage , hours_worked , hours_ytd , appointments} = employee[0]
  debugger
  const walkerAppointments = position === "walker" ? <NavLink className="text-left pb-4" href={`/schedule/${employee_name}`}>{appointments.length} Appointments</NavLink> : ""
  
  function handleClick(){

    const wages = Number.parseFloat(hours_worked * wage)

    if (wages > 0) {
      alert(`Direct deposit of $${wages} sent to ${employee_name}`)
      fetch(`http://localhost:3005/employees/${infoId}` , {
        method: 'PATCH' ,
        headers: { "Content-Type" : "application/json" } ,
        body: JSON.stringify({
          hours_worked : 0
        })
      })
        .then(r => r.json())
        .then(res => {
          const index = employees.indexOf(employee[0])
          employees.splice(index , 1 , res) 
          setEmployees([...employees])
        })
    }
  }
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
      </ul>
        {walkerAppointments}
        <Button onClick={handleClick}>Send Direct Deposit</Button>
    </>
  )
}

export default PayrollInfo