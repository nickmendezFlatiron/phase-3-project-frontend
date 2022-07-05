import React from 'react'
import {Container , Form , Row , Col , Button} from 'react-bootstrap'

const AppointmentForm = ({all}) => {
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
                <Form.Label className='fw-bold'>Appointment Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label className='fw-bold'>Assign Walker</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." required/>
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