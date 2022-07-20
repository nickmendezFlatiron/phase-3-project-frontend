import React from 'react';

// Bootstrap Components
import { Col, Container, Row } from 'react-bootstrap' ;
// App Components
import GridView from './GridView';
import ClientForm from './ClientForm';

const Clients = ({owners , appointments , setOwners}) => {

  if (appointments.length === 0) return <h3>Loading...</h3>
  return (
    <>
      <h1 className='py-5'>Dogs Portal</h1>
      <Container >
        <Row>
          <Col lg={9} className='height-match'>
            <GridView owners={owners} appointments={appointments} className="overflow"/>
          </Col>
          <Col lg={3}>
            <ClientForm owners={owners}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Clients