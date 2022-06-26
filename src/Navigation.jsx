import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar , Nav , Container } from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img src='./public/Logo 3.png'/>
       <Navbar.Brand as={Link} to="/">Appointments</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/clients" exact>Clients</Nav.Link>
          <Nav.Link as={Link} to="/schedule" exact>Schedule</Nav.Link>
          <Nav.Link as={Link} to="/payroll" exact>Payroll</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation