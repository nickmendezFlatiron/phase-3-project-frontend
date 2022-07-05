import {React , } from 'react'
import {Container , Form , Row , Col , Button} from 'react-bootstrap'

const AppointmentForm = ({all}) => {
  if (all.length === 0) return <h3>Loading...</h3>

  const listOfEmployees = all.employees.filter(employee => employee.position === "walker").map(employee => {return <option key={employee.id} value={employee.employee_name}>{employee.employee_name}</option>})
  console.log("walkers: " , listOfEmployees)
  return (
    <>
     <Container className="justify-content-around text-center">
      <Form className="mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75" >
        <Row>
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label className='fw-bold'>Customer</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label className='fw-bold'>Dog</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formOrderDate">
                <Form.Label className='fw-bold'>Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formOrderDate">
                <Form.Label className='fw-bold'>Time</Form.Label>
                <Form.Control type="time" name="time" />
              </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label className='fw-bold'>Assign Walker</Form.Label>
             <select id="walkers">
              {listOfEmployees}
             </select>
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center my-3">
         <Button variant="info" type="submit" className="mb-3 text-light" >Schedule Walk</Button>
        </div>
      </Form>
    </Container>
    </>
  )
}

export default AppointmentForm