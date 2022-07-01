import React from 'react'

import {Row} from 'react-bootstrap'
import ClientCard from './ClientCard'

const GridView = ({owners}) => {

  const listOfDogs = owners.map(owner => {
    return owner.dogs.map(dog =>   <ClientCard dog={dog} key={dog.id} owner={owner}/>)
   

  })
  return(
    <Row xs={2} sm={2} md={3} lg={4} className="py-4 g-4"> 
    {listOfDogs}
    </Row> 
  )
}

export default GridView ;