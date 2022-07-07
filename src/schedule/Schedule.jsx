import{ React , useState , useEffect}from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'

const Schedule = () => {
  const [all , setAll] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:3001/all")
    .then(r => r.json())
    .then (allRes => setAll(allRes))

  } , [])

  return (
    <Container >
      <h1 className='py-5' >Walk Schedule</h1>
      <Row>
        <Col lg={8}>
          <AppointmentsCalendar all={all}/>
        </Col>
        <Col lg={4}>
          <AppointmentForm all={all}/>  
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule