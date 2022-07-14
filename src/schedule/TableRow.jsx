import React , { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const TableRow = ({appointment , walkers , appointments , setAppointments}) => {
  let {id , start , title , employee_id , walk_duration} = appointment
  const walker = walkers.find(walker => walker.id === employee_id)
  const [walkerId , setWalkerState] = useState(walker.id)
  
  
  
  
  start = (new Date(start)).toString().split(" ").slice(0,5).join(" ")
  
  function handleCancel() {
   let res = window.confirm(`Are you sure you want to cancel ${title}'s walk with ${walker.employee_name}?` )
   if (res === true) {
     let filter = appointments.filter(appointment => appointment.id !== id)
     fetch(`http://localhost:3002/appointments/${id}` , {method: 'DELETE'})
       .then(r => r.json())
       .then(() => setAppointments(filter))
   } 
  }

  function handleUpdate() {
    fetch(`http://localhost:3002/appointments/${id}` , {
      method: 'PATCH' ,
      headers: { "Content-Type" : "application/json" } ,
      body: JSON.stringify({
        employee_id: walkerId
      })
    })
      .then((r) => r.json()) 
      .then(res => {
        const filter = appointments.filter(a => a.id !== id)
        setAppointments([...filter , res])
        alert('Appointment Walker Updated')
      })
  }
  
  function handleWalker(event) {
    setWalkerState(event.target.value)
  }

  const listOfWalkers = walkers.map(w => {return (w.employee_name !== walker.employee_name) && <option key={`${w.id}-${w.id}`} value={w.id}>{w.employee_name}</option>})

 const form = <Form.Select aria-label="Select walker..." onChange={handleWalker}>
                <option value="default-walker">{walker.employee_name}</option>
                {listOfWalkers}
              </Form.Select>

  return (
    <tr>
      <td>{start}</td>
      <td>{walk_duration}</td>
      <td>{title}</td>
      <td>{form}</td>
      <td>
        <Button variant="secondary" className="text-light me-3 opacity-75" onClick={handleUpdate}>Update</Button>
        <Button variant="danger" className="text-light opacity-75" onClick={handleCancel}>Cancel</Button>
      </td>
    </tr>
  )
}

export default TableRow