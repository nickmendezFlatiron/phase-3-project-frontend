import React from 'react'

import {Row} from 'react-bootstrap'
import ClientCard from './ClientCard'

const GridView = () => {
   

  return(
    <Row xs={2} sm={2} md={3} lg={4} className="py-4 g-4">  
      <ClientCard />
    </Row> 
  )
}

export default GridView ;