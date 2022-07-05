import React from 'react'
import {Container , Form , Row , Col , Button} from 'react-bootstrap'

const AppointmentForm = () => {
  return (
    <>
     <Container className="justify-content-around">
      <Form className="mx-auto w-75 shadow rounded-3 bg-light bg-opacity-75" >
        <Row className="">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Customer</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Dog</Form.Label>
              <Form.Control type="text" placeholder="John Doe..." required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2"> 
          <Col>
             <Form.Group controlId="formOrderDate">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="mt-2">
            <Form.Group controlId="formCustomerName">
              <Form.Label>Assign Walker</Form.Label>
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