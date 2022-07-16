import React from 'react'

import Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import uuid from 'react-uuid'

const ClientForm = ({owners}) => {

  const listOfOwners = owners.map(owner => {return <option key={uuid()} value={owner.id}>{owner.owner_name}</option>})
 
  return (
    <Form>
        <Row className="justify-content-between text-center border-3 shadow-sm rounded">
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Dog Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" placeholder="Enter URL link (optional)" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>{`Weight(lbs)`}</Form.Label>
                <Form.Control type="number" placeholder="Enter weight here" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>Owner</Form.Label>
                <Form.Select >
                  {listOfOwners}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center ">
           <Button variant="dark" type="submit" className="my-3 text-light" >Schedule Walk</Button>
          </div>
        </Row>
      </Form>
  )
}

export default ClientForm