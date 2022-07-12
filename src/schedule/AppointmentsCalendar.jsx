import React , {useState , useEffect} from 'react'

// Components and functions for the calendar
import {Calendar , dateFnsLocalizer } from 'react-big-calendar' ;
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'


// CSS Styling for Calendar and Date Picker
import 'react-big-calendar/lib/css/react-big-calendar.css' 
// import 'react-big-calendar/lib/sass/styles';


const AppointmentsCalendar = ({appointments}) => {

  if (appointments.length === 0) return <h3>Loading...</h3>

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

  const events = appointments.length > 1 && appointments.map(appointment => {
    let {start , end , title , id} = appointment

    start = new Date(start)
    end  = new Date(end)

    
    return {
      start: start ,
      end : end ,
      id : id ,
      resourceId : id + 1 ,
      title : `${title}'s walk` 
    }
  })

  console.log("events " , events)

  return (
    
      <Calendar 
          events={events}
          localizer={localizer}
          showMultiDayTimes
          step={60}
          
        style={style}
      />
    
  )
}

export default AppointmentsCalendar