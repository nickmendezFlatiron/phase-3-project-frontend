import{ React , useState }from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'

const Schedule = () => {
  
 

  return (
    <Container className='pt-5'>
      <Row>
        <Col lg={8}>
          <AppointmentsCalendar />
        </Col>
        <Col lg={4}>
          <AppointmentForm />  
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule