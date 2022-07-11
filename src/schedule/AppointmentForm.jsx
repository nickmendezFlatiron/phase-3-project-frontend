import {React , useState} from 'react'
import {Container , Form , Row , Col , Button} from 'react-bootstrap'

const AppointmentForm = ({all}) => {
  // Date , time , Assign walker
  const [dog , setDog] = useState('')
  const [walkDuration , setWalkDuration] = useState('')
  const [date , setDate] = useState('')
  const [time , setTime] = useState('')
  const [walker , setWalker] = useState('')
  
  


  if (all.length === 0) return <h3>Loading...</h3>

  function handleDog(event) {
    setDog(event.target.value)
  }
  function handleWalkDuration(event) {
    setWalkDuration(event.target.value)
    console.log(parseInt(event.target.value))
  }
  function handleDate(event) {
    // months are 0..11 , not 1..12
    const format = event.target.value.split('-')
    format[1] = format[1] - 1
    setDate(format)

  }
  function handleTime(event) {
    const format = event.target.value.split(':')
    setTime(format)
    
  }
  function handleWalker(event) {
    setWalker(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    
    const datetime = [...date , ...time , 0 , 0]
    
    const newDate = new Date(...datetime)
    const newCopy = new Date(...datetime)

    const end = newCopy.setMinutes(newDate.getMinutes() + 30)  
   
    if(dog === '' || date === '' || time === '' || walker === '' || walkDuration === '') {
     return alert('Please fill out the entire form to submit a new appointment.')
    }

    const newAppointment = {
      dog_id : dog ,
      employee_id : walker , 
      walk_duration : walkDuration ,
      start : newDate  ,
      end : end  
    }


    fetch(`http://localhost:3002/appointments` , {
      method : 'POST' ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify(newAppointment)
    })
      .then(r => r.json())
      .then((appointment) => {all.appointments = [...all.appointments , appointment]})
      console.log('new_log: ', all.appointments)
    setDog('')
    setWalkDuration('')
    setDate('')
    setTime('')
    setWalker('')

    alert(`Appointment for ${date} at ${time} has been scheduled`)
  }

  
  const listOfWalkers = all.employees.filter(employee => employee.position === "walker").map(employee => {return <option key={employee.id} value={employee.id}>{employee.employee_name}</option>})
  const listOfDogs = all.dogs.map(dog => {return <option key={dog.id} value={dog.id}>{dog.dog_name}</option>})
  
  return (
    <>
     <Container className="justify-content-around text-center">
      <Form className="mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75 padding" onSubmit={handleSubmit}>
        <Row>
          <Col className="my-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label className='fw-bold'>Dog</Form.Label>
              <Form.Select onChange={handleDog}>
                <option value="default-dog">Select a Dog</option>
                {listOfDogs}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="my-2">
            <Form.Group controlId="formWalkDuration">
              <Form.Label className='fw-bold'>Walk Duration</Form.Label>
              <Form.Select onChange={handleWalkDuration}>
                <option value={30}>30 Minutes</option>
                <option value={60}>60 Minutes</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formDate">
                <Form.Label className='fw-bold'>Date</Form.Label>
                <Form.Control type="date" name="date" onChange={handleDate}/>
              </Form.Group>
          </Col>
        </Row>
        <Row > 
          <Col className="my-2">
             <Form.Group controlId="formScheduledTime">
                <Form.Label className='fw-bold'>Time</Form.Label>
                <Form.Control type="time" name="time" onChange={handleTime} />
              </Form.Group>
          </Col>
        </Row>
        <Row >
          <Col className="my-2">
            <Form.Group controlId="formAssignedWalker">
              <Form.Label className='fw-bold'>Assign Walker</Form.Label>
              <Form.Select aria-label="Select walker..." onChange={handleWalker}>
                <option value="default-walker">Select a Walker</option>
                {listOfWalkers}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center ">
         <Button variant="info" type="submit" className="my-3 text-light" >Schedule Walk</Button>
        </div>
      </Form>
    </Container>
    </>
  )
}

export default AppointmentForm