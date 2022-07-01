import {React , Fragment , useState , useEffect} from 'react'
import {Routes , Route} from 'react-router-dom' ;

import Navigation from './Navigation';
import HomePage from './home/HomePage'
import Clients from './clients/Clients';
import Schedule from './schedule/Schedule';
import Payroll from './payroll/Payroll';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [owners , setOwners] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/owners")
    .then(r => r.json())
    .then(owners => setOwners(owners))
  }, [])

  return (
    <Fragment >
      <Navigation/>
        <Routes >
            <Route path="/clients" exact element={<Clients owners={owners}/>} />
            <Route path="/schedule" exact element={<Schedule />} />
            <Route path="/payroll" exact element={<Payroll />} />
            <Route path="/" exact element={<HomePage />} />
        </Routes>
        {/* <Footer/> */}
    </Fragment>
  )
}

export default App;
