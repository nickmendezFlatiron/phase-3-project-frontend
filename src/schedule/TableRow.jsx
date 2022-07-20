import React , { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const TableRow = ({appointment , walkers , appointments , setAppointments}) => {

  let {id , start , title , employee_id , walk_duration} = appointment
  const walker = walkers.find(walker => walker.id === employee_id)

  const [walkerId , setWalkerState] = useState(walker.id)
  const [time , setTime] = useState(walk_duration)
  
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
    if (walker.id !== walkerId || walk_duration !== time) {
      fetch(`http://localhost:3002/appointments/${id}` , {
        method: 'PATCH' ,
        headers: { "Content-Type" : "application/json" } ,
        body: JSON.stringify({
          employee_id: walkerId , 
          walk_duration: time 
        })
      })
        .then((r) => r.json()) 
        .then(res => {
          // const filter = appointments.filter(a => a.id !== id)
          const index = appointments.indexOf(appointment)
          appointments.splice(index , 1 , res) 
          setAppointments([...appointments])
        })
        alert(`${title}'s Walk Updated`)
        
    }
  }
  
  function handleWalker(event) {
    setWalkerState(event.target.value)
  }

  function handleTime(event) {
    setTime(parseInt(event.target.value))
    console.log("time " , event.target.value)
  }

  
  const listOfWalkers = walkers.map(w => {return (w.employee_name !== walker.employee_name) && <option key={`${w.id}-${w.id}`} value={w.id}>{w.employee_name}</option>})
  

  const form = <Form.Select aria-label="Select walker..." onChange={handleWalker}>
                <option value={walker.id}>{walker.employee_name.split(" ").slice(0 , 2).join(" ")}</option>
                {listOfWalkers}
              </Form.Select>

  

  const timeForm = <Form.Select aria-label="Select time" onChange={handleTime}>
                      <option value={30} selected={walk_duration === 30 ? true : false}>{30}</option>
                      <option value={60} selected={walk_duration === 60 ? true : false}>{60}</option>
                    </Form.Select>

  return (
    <tr>
      <td>{start}</td>
      <td>{timeForm}</td>
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