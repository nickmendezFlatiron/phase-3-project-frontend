import{ React , useState }from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


import AppointmentForm from './AppointmentForm'
import AppointmentsCalendar from './AppointmentsCalendar'
import Toolbar from './Toolbar'
import AppointmentTable from './AppointmentTable'
import { useEffect } from 'react'

const Schedule = ({owners , walkers , appointments , setAppointments}) => {
  const [toggle , onToggle] = useState(false)
  const [filter , setFilter] = useState("")
  const params = useParams()
  
  let spinner = <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>


useEffect(() => {
  if( Object.keys(params).length > 0) {
    setFilter(params.search)
    onToggle(true)
  }
} , [])

  if (appointments.length === 0 ) return spinner

  const toggleView = toggle === false ? <AppointmentsCalendar appointments={appointments} walkers={walkers}/> : <AppointmentTable appointments={appointments} setAppointments={setAppointments} walkers={walkers} filter={filter}/>
  return (
    <Container >
      <h1 className='py-5'>Walk Schedule</h1>
      <Row className='pb-4' >
        <Col>
           <Toolbar toggle={toggle} onToggle={onToggle} filter={filter} setFilter={setFilter}/>
        </Col>
      </Row>
      <Row >
        <Col lg={9} className="height-match">
          {toggleView}
        </Col>
        <Col lg={3}>
          <AppointmentForm owners={owners} appointments={appointments} setAppointments={setAppointments} walkers={walkers}/>  
        </Col>
      </Row>
    </Container>
  )
}

export default Schedule