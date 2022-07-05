import React , {useState , useEffect} from 'react'

// Components and functions for the calendar
import {Calendar , dateFnsLocalizer} from 'react-big-calendar' ;
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


// CSS Styling for Calendar and Date Picker
import 'react-big-calendar/lib/css/react-big-calendar.css' 
// import 'react-big-calendar/lib/sass/styles';


const AppointmentsCalendar = ({all}) => {
  
  const locales = {
    "en-US" : enUS 
  } 
  const localizer = dateFnsLocalizer({
    format ,
    parse ,
    startOfWeek ,
    getDay ,
    locales
  })

  const style = {height: 500}
  console.log(all.appointments)

 


  return (
    
      <Calendar 
        localizer={localizer} 
        events={all.appointments} 
        title="walk Scheduled"
        startAccessor="date"
        endAccessor="date" 
        style={style}
      />
    
  )
}

export default AppointmentsCalendar