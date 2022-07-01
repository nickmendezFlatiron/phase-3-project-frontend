import React , {useState} from 'react'

// Components and functions for the calendar
import {Calendar , dateFnsLocalizer} from 'react-big-calendar' ;
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import DatePicker from  'react-datepicker' ;

// CSS Styling for Calendar and Date Picker
import 'react-big-calendar/lib/css/react-big-calendar.css' 
import 'react-datepicker/dist/react-datepicker.css'

const AppointmentsCalendar = () => {

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

  return (
    
      <Calendar 
        localizer={localizer} 
        events={[]} 
        startAccessor="start"
        endAccessor="end" 
        style={{ height : 500 , width: 500}}
      />
    
  )
}

export default AppointmentsCalendar