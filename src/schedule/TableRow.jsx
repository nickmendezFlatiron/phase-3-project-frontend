import React from 'react'
import Button from 'react-bootstrap/Button'

const TableRow = ({appointment , walkers , appointments , setAppointments}) => {
  let {id , start , title , employee_id} = appointment

  start = (new Date(start)).toString().split(" ").slice(0,5).join(" ")
  const walker = walkers.find(walker => walker.id === employee_id)
  
  function handleClick() {

    let filter = appointments.filter(appointment => appointment.id !== id)
    
    fetch(`http://localhost:3002/appointments/${id}` , {method: 'DELETE'})
      .then(r => r.json())
      .then(() => setAppointments(filter))
  }
  
  return (
    <tr>
      <td>{start}</td>
      <td>{title}</td>
      <td>{walker.employee_name}</td>
      <td><Button variant="info" className="text-light" onClick={handleClick}>Cancel</Button></td>
    </tr>
  )
}

export default TableRow