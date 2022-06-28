import React from 'react'
import {Card , Col} from 'react-bootstrap'

const ClientCard = () => {
  return (
    <>
      <Col>
        <Card >
          <Card.Img variant="top" src=" https://via.placeholder.com/100" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ClientCard