import React , {useEffect , useState} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import PayrollTable from './PayrollTable'
import PayrollInfo from './PayrollInfo'

const Payroll = () => {
  const [employees , setEmployees] = useState([])
  const [infoId , setInfoId] = useState(1)



  useEffect(() => {
    fetch("http://localhost:3005/employees")
      .then(r => r.json())
      .then(employees => setEmployees(employees))
  },[])
 
  if (employees.length === 0) return <h4>Loading...</h4>
  
  return (
    <>
      <h1 className='py-5'>Payroll</h1>
    <Container>
     <Row>
      <Col lg={7} className='border border-dark border-2 rounded'>
        <PayrollInfo infoId={infoId} employees={employees}/>
      </Col>
      <Col lg={5} className="height-match">
        <PayrollTable employees={employees} setInfoId={setInfoId}/>
      </Col>
      </Row> 
    </Container>
    </>
  )
}

export default Payroll