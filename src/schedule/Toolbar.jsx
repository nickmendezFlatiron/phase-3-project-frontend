import React from 'react'
import { Form , FormControl , InputGroup } from 'react-bootstrap'

const Toolbar = ({toggle , onToggle}) => {

  function handleClick () {
    onToggle(!toggle)
  }
  return (
    <>
        <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Search for customers here...' />
      <InputGroup.Text id="inputGroup-sizing-lg">
        <label  className="text-secondary" >Calendar &nbsp;</label>
          <Form.Check
          type="switch"
          id="custom-switch"
          checked={toggle}
          onClick={handleClick}
        />
        <label  className="text-secondary" >&nbsp; Table</label>
      </InputGroup.Text>
  </InputGroup>
    </>
  )
}

export default Toolbar