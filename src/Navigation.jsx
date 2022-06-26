import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar , Nav , Container } from 'react-bootstrap'
import image from "./assets/Logo-3.png"


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <a href="/"> <img alt='logo' src={image} id="nav-logo"/></a>
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