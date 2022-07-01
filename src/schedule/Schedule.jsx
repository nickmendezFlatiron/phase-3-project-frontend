import{ React , useState }from 'react'
import Container from 'react-bootstrap/Container'

import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'

const Schedule = () => {
  
 

  return (
    <Container className='pt-5'>
      <AppointmentsCalendar />
      {/* <AppointmentForm /> */}
    </Container>
  )
}

export default Schedule