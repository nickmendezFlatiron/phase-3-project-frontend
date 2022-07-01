import React from 'react'
import {Card , Col , ListGroup} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const ClientCard = ({dog , owner}) => {
  const {dog_name , dog_image } = dog
  const {owner_name , phone_number} = owner
  return (
    <>
      <Col >
        <Card className='text-center d-flex align-items-center'>
          <Card.Img variant="top" src={dog_image} className="dog-card mt-4 rounded shadow"/>
          <Card.Body >
            <ListGroup variant="flush" >
            <Card.Subtitle >Name: {dog_name} </Card.Subtitle>
              <ListGroup.Item>Owner: {owner_name}</ListGroup.Item>
              <ListGroup.Item>Emergency Contact: {phone_number} </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">#_of Appointments</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
            <Card.Link href="#">{dog_name}'s Profile</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ClientCard