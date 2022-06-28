import React from 'react'
import {Card , Col , ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ClientCard = () => {
  return (
    <>
      <Col>
        <Card className='text-center'>
          <Card.Img variant="top" src=" https://via.placeholder.com/100" />
          <Card.Body >
            <ListGroup variant="flush " >
            <Card.Subtitle >Dog's Name</Card.Subtitle>
              <ListGroup.Item>Owner</ListGroup.Item>
              <ListGroup.Item>Emergency Contact </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">#_of Appointments</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
            <Card.Link href="#">Customer_name's Profile</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ClientCard