import{ React , useState , useEffect}from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'
import Toolbar from './Toolbar'

const Schedule = ({owners}) => {
  const [appointments , setAppointments] = useState([])
  const [toggle , onToggle] = useState(false)
 
  useEffect(() => {
    fetch("http://localhost:3002/appointments")
    .then(r => r.json())
    .then (appointments => setAppointments(appointments))

  } , [])
  
  const render = toggle === false ? <AppointmentsCalendar appointments={appointments}/> : <h1>True</h1>
  return (
    <Container >
      <Row className='pb-4' >
      
      <h1 className='py-5'>Walk Schedule</h1>
    
        <Col>
           <Toolbar toggle={toggle} onToggle={onToggle} />
        </Col>

      </Row>
      <Row >
        <Col lg={8}>
          {render}
        </Col>
        <Col lg={4}>
          <AppointmentForm owners={owners} appointments={appointments} setAppointments={setAppointments}/>  
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule