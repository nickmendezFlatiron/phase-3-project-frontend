import React from 'react'
import {Card , Col , ListGroup} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const ClientCard = ({dog}) => {
  let {dog_name , dog_image , owner_id , id} = dog
  return (
    <>
      <Col className="" >
        <Card className='text-center d-flex align-items-center'>
          <Card.Img variant="top" src={dog_image} className="dog-card mt-4"/>
          <Card.Body >
            <ListGroup variant="flush" >
            <Card.Subtitle >Name :{dog_name} ID: {id}</Card.Subtitle>
              <ListGroup.Item>Owner: {owner_id}</ListGroup.Item>
              <ListGroup.Item>Emergency Contact: </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">#_of Appointments</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
            <Card.Link href="#">{dog_name}'s' Profile</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ClientCard