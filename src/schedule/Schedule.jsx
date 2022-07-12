import{ React , useState , useEffect}from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'

const Schedule = ({owners}) => {
  const [appointments , setAppointments] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:3002/appointments")
    .then(r => r.json())
    .then (appointments => setAppointments(appointments))

  } , [])
  
  
  return (
    <Container >
      <h1 className='py-5' >Walk Schedule</h1>
      <Row>
        <Col lg={8}>
          <AppointmentsCalendar appointments={appointments}/>
        </Col>
        <Col lg={4}>
          <AppointmentForm owners={owners} appointments={appointments} setAppointments={setAppointments}/>  
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule