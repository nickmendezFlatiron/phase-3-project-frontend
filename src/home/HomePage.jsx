import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Card , Button , Row , Col} from 'react-bootstrap'


const HomePage = () => {
  return (
    <>
      <h1 className='text-center pt-5'>Admin Portal</h1>
    <Container className="py-5 main paw-bg">
      <Row className="justify-content-around">
        {/* Clients Portal */}
          <Col lg={4} className=' pb-3 '>
            <Card className="text-center">
              <Card.Header>
                <Card.Title><strong>Create A New Customer</strong></Card.Title>
              </Card.Header>
              <Card.Body> 
                <i className="icons fa-solid fa-dog text-secondary "></i>              
                <Card.Text>
                  Create and update customer profiles in your existing customer directory
                </Card.Text>
                <Button as={Link} to="/clients" exact variant="primary">Go to Customers</Button>
              </Card.Body>
           </Card>
          </Col>
          {/* Scheduling Portal */}
          <Col lg={4} className='pb-3'>
            <Card className="text-center">
              <Card.Header> 
                <Card.Title><strong>Schedule a New Appointment</strong></Card.Title>
              </Card.Header>
              <Card.Body>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="text-secondary py-2" viewBox="0 0 16 16">
                  <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <Card.Text>
                  Schedule new appointments , assign dog walkers , and check availability
                </Card.Text>
                <Button as={Link} to='/schedule' exact variant="primary">Go to Schedule</Button>
              </Card.Body>
           </Card>
          </Col>
          {/* Employee Portal */}
          <Col lg={4} className='pb-3'>
            <Card className="text-center">
              <Card.Header>
                <Card.Title><strong>Access Employee Payroll</strong></Card.Title>
              </Card.Header>
              <Card.Body>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="text-secondary py-2" viewBox="0 0 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                </svg>
                <Card.Text>
                 Access all employee information and manage payroll
                </Card.Text>
                <Button as={Link} to="/payroll" exact variant="primary">Go to Payroll</Button>
              </Card.Body>
           </Card>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default HomePage