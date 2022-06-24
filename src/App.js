import {React , Fragment} from 'react'
import {Routes , Route} from 'react-router-dom' ;

import Navigation from './Navigation';
import HomePage from './home/HomePage'
import Clients from './clients/Clients';
import Schedule from './schedule/Schedule';
import Payroll from './payroll/Payroll';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Navigation/>
        <Routes>
            <Route path="clients" element={<Clients />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    </Fragment>
  )
}

export default App;
