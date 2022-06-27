import React from 'react'

import { Container , InputGroup , FormControl , Form} from 'react-bootstrap'

const Searchbar = () => {
  return (
    <Container>
    <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Search for customers here...' />
      <InputGroup.Text id="inputGroup-sizing-lg">
        <label  className="text-secondary" >Grid &nbsp;</label>
          <Form.Check
          type="switch"
          id="custom-switch"
          defaultChecked="false"
        />
        <label  className="text-secondary" >&nbsp; Table</label>
      </InputGroup.Text>
  </InputGroup>
   </Container>
  )
}

export default Searchbar