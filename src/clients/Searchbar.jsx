import React from 'react'

import { InputGroup , FormControl } from 'react-bootstrap'

const Searchbar = () => {
  return (
    <>
    <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Search for customers here...' />
     
  </InputGroup>
   </>
  )
}

export default Searchbar