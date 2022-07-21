import {React , Fragment , useState , useEffect} from 'react'
import {Routes , Route} from 'react-router-dom' ;

import Navigation from './Navigation';
import HomePage from './home/HomePage'
import Clients from './clients/Clients';
import Schedule from './schedule/Schedule';
import Payroll from './payroll/Payroll';
// import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [appointments , setAppointments] = useState([])
  const [owners , setOwners] = useState([])
  const [walkers , setWalkers] = useState([])

  useEffect(() => {
    

    fetch("http://localhost:3005/appointments")
    .then(r => r.json())
    .then(appointments => setAppointments(appointments))
    
    Promise.all([fetch("http://localhost:3005/owners") , fetch("http://localhost:3005/walkers")])
    .then(r => Promise.all(r.map(res => res.json())))
    .then(data => {
      setOwners(data[0])
      setWalkers(data[1])
    })
  }, [])

  
  return (
    <Fragment >
      <Navigation/>
        <Routes >
            <Route path="/clients" exact element={<Clients owners={owners} appointments={appointments} setOwners={setOwners}/>}/>
            <Route path="/schedule" exact element={<Schedule owners={owners} walkers={walkers} appointments={appointments} setAppointments={setAppointments}/>} >
              <Route path=":search" element={<Schedule owners={owners} walkers={walkers} appointments={appointments} setAppointments={setAppointments}/>} />
            </Route>
            <Route path="/payroll" exact element={<Payroll  setAppointments={setAppointments}/>} />
            <Route path="/" exact element={<HomePage />} />
        </Routes>
        {/* <Footer/> */}
    </Fragment>
  )
}

export default App;
