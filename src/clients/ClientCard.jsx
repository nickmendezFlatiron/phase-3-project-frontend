import React from 'react'
import {Card , Col , ListGroup} from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const ClientCard = ({dog , owner , appointments}) => {
  const {dog_name , dog_image ,id } = dog
  const {owner_name , phone_number} = owner


  const appointmentCount = appointments.filter(appointment => appointment.dog_id === id).length
  const name = owner_name.split(" ").slice(0,2).join(" ")

  return (
    <>
      <Col >
        <Card className='text-center d-flex align-items-center'>
          <Card.Img variant="top" src={dog_image} className="dog-card mt-4 rounded shadow"/>
          <Card.Body >
            <ListGroup variant="flush" >
            <Card.Subtitle >Name: {dog_name} </Card.Subtitle>
              <ListGroup.Item>Owner: {name}</ListGroup.Item>
              <ListGroup.Item>Emergency Contact: {phone_number} </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href={`/schedule/${dog_name}`}>{appointmentCount} Appointments</Card.Link>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ClientCard