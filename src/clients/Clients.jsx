import React from 'react';

// Bootstrap Components
import { Container } from 'react-bootstrap' ;
import Searchbar from './Searchbar';
// App Components
import GridView from './GridView';

const Clients = ({owners , appointments}) => {

  if (appointments.length === 0) return <h3>Loading...</h3>
  return (
    <>
      <h1 className='py-5'>Customers Portal</h1>
      <Container>
      
      
        <Searchbar />

        <GridView owners={owners} appointments={appointments} />
      </Container>
    </>
  )
}

export default Clients