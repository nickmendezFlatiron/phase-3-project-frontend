import React from 'react'
import { Form , FormControl , InputGroup } from 'react-bootstrap'

const Toolbar = ({toggle , onToggle , filter , setFilter}) => {

  function handleChange () {
    onToggle(!toggle)
  }

  function handleFilter(event){
    setFilter(event.target.value.toLowerCase())
  }
  return (
    <>
        <InputGroup size="lg">
      <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder='Search for appointments by name...' value={filter} onChange={handleFilter}/>
      <InputGroup.Text id="inputGroup-sizing-lg">
        <label  className="text-secondary" >Calendar &nbsp;</label>
          <Form.Check
          type="switch"
          id="custom-switch"
          checked={toggle}
          onChange={handleChange}
        />
        <label  className="text-secondary" >&nbsp; Table</label>
      </InputGroup.Text>
  </InputGroup>
    </>
  )
}

export default Toolbar