import React from 'react'
import { Button, Container, NavLink } from 'react-bootstrap'

const PayrollInfo = ({employees , infoId , setEmployees}) => {

  const employee = employees.filter(employee => parseInt(employee.id) === parseInt(infoId))

  let {id , employee_name , address , email , phone_number , position , wage , hours_worked , hours_ytd , appointments} = employee[0]
  
  const walkerAppointments = position === "walker" ? <NavLink className="text-left pb-3 border-bottom " href={`/schedule/${employee_name}`}>{appointments.length} Walks Scheduled</NavLink> : ""
  
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
      <Container className="bg-dark text-light align-items-center p-2 my-3 rounded shadow-lg">
        <h2>{employee_name}</h2>
      </Container>
      <Container className="my-3 p-3 bg-white rounded box-shadow">
      <h6 className="fw-bold">Contact Information</h6>
      <ul className='no-bullets border-bottom p-3'>
        <li><strong>Address:</strong> {address}</li>
        <li><strong>Phone Number:</strong> {phone_number}</li>
        <li><strong> Email:</strong> {email}</li>
      </ul>
      <h6 className="fw-bold">Employee Information</h6>
      <ul className='no-bullets border-bottom p-3'>
        <li><strong>ID:</strong> {id}</li>
        <li><strong>Position:</strong> {position}</li>
        <li><strong>Wage:</strong> ${wage}</li>
        <li><strong>Hours:</strong> {hours_worked}</li>
        <li><strong>Hours YTD:</strong> {hours_ytd}</li>
      </ul>
        {walkerAppointments}
        <Button className="p-3 mt-3" onClick={handleClick}>Send Direct Deposit</Button>
      </Container>
    </>
  )
}

export default PayrollInfo