import React from 'react';

import {Container} from 'react-bootstrap' ;
import Searchbar from './Searchbar';

const Clients = () => {
  return (
    <>
      <h1 className='py-5'>Customers Portal</h1>
      <Container>
        <Searchbar />
      </Container>
    </>
  )
}

export default Clients