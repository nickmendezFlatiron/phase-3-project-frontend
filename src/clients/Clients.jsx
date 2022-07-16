import React from 'react';

// Bootstrap Components
import { Container } from 'react-bootstrap' ;
// App Components
import GridView from './GridView';
import ClientForm from './ClientForm';

const Clients = ({owners , appointments}) => {

  if (appointments.length === 0) return <h3>Loading...</h3>
  return (
    <>
      <h1 className='py-5'>Customers Portal</h1>
      <Container>
      <ClientForm owners={owners}/>
        <GridView owners={owners} appointments={appointments} />
      </Container>
    </>
  )
}

export default Clients