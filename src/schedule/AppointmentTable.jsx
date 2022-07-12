import React from 'react'

import Table from 'react-bootstrap/Table'
import TableRow from './TableRow'

const AppointmentTable = ({appointments}) => {
  const listOfRows = appointments.map(appointment => {
    return <TableRow key={appointment.id} appointment={appointment} />
  })
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Appointment</th>
          <th>Dog</th>
          <th>Walker</th>
          <th>Cancel</th>
        </tr>
      </thead>
      <tbody>
        {listOfRows}
      </tbody>
    </Table>
  )
}

export default AppointmentTable