import React , {useState} from 'react'

import Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import uuid from 'react-uuid'

const ClientForm = ({owners}) => {

  const [ name , setName ] = useState('')
  const [ weight, setWeight ] = useState(0)
  const [ owner , setOwner ] = useState('')
  const [ image , setImage ] = useState('')

  const listOfOwners = owners.map(owner => {return <option key={uuid()} value={owner.id}>{owner.owner_name}</option>})
 
  function handleName(event) {
    setName(event.target.value)
  }

  function handleWeight(event) {
    setWeight(event.target.value)
  }

  function handleOwner(event) {
    setOwner(event.target.value)
  }

  function handleImage(event) {
    setImage(event.target.value)
  }

  function handleSubmit(event) {

    event.preventDefault()

    const newDog = {
      dog_name : name ,
      dog_weight : weight ,
      owner_id : owner , 
      dog_image : image
    }
    
    if(name === '' || weight === 0 || owner === '') {
      return alert('Please fill out the entire form to submit a new appointment.')
     }

    fetch(`http://localhost:3002/dogs` , {
      method : 'POST' ,
      headers: { "Content-Type" : 'application/json'} ,
      body : JSON.stringify(newDog)
    })
      .then(r => r.json())
      // .then(newDog => {
      //   let updatedOwner = owners.find(o => o.id )
      //   debugger
      //   console.log(updatedOwner.dogs)
      // })
      alert("New Dog Profile Created")
      
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Row className="justify-content-between text-center border-3 shadow-sm rounded">
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Dog Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={handleName}/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="text" placeholder="Enter URL link (optional)" onChange={handleImage}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>{`Weight(lbs)`}</Form.Label>
                <Form.Control type="number" placeholder="Enter weight here" onChange={handleWeight}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>Owner</Form.Label>
                <Form.Select onChange={handleOwner}>
                  {listOfOwners}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center ">
           <Button variant="dark" type="submit" className="my-3 text-light" >Create Dog Profile</Button>
          </div>
        </Row>
      </Form>
  )
}

export default ClientForm