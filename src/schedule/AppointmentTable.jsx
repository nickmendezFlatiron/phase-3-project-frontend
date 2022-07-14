import React from 'react'

import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'

const AppointmentTable = ({appointments , walkers , setAppointments , filter}) => {

  // Filter appointments by employee name and dog name
  const filterResults = appointments.filter(appointment => { 
    const walker = walkers.find(walker => walker.id === appointment.employee_id)
    return appointment.title.toLowerCase().includes(filter) || walker.employee_name.toLowerCase().includes(filter)}
  )

  const listOfRows = filterResults.map(appointment => {
    return <TableRow key={appointment.id} appointment={appointment} walkers={walkers} appointments={appointments} setAppointments={setAppointments}/>
  })

  return (
    <Table striped hover className='overflow'>
      <thead>
        <tr>
          <th>Appointment</th>
          <th>Time</th>
          <th>Dog</th>
          <th>Walker</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {listOfRows}
      </tbody>
    </Table>
  )
}

export default AppointmentTable