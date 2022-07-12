import React , {useState , useCallback} from 'react'

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

  const handleSelectEvent = useCallback(
    (event) =>{ 
      // Format time to 12H 
      const time = event.start.toString().split(" ").slice(4,5).join(" ").split(":")
      time.pop()
      const amPm = parseInt(time[0]) <= 12 ? `${time.join(":")} AM` : `${parseInt(time[0]) - 12}:${time[1]} PM` 

      window.alert(
    `${event.title} for ${event.walkDuration} minutes at ${amPm}`)},
    []
  )

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
    let {start , end , title , id , walk_duration} = appointment

    start = new Date(start)
    end  = new Date(end)
  
    
    return {
      start: start ,
      end : end ,
      id : id ,
      resourceId : `${id}_${title}` ,
      title : `${title}'s walk` , 
      walkDuration : walk_duration
    }
  })

  

  // console.log("events " , events)

  return (
    
      <Calendar 
        events={events}
        localizer={localizer}
        showMultiDayTimes
        step={60}
        onSelectEvent={handleSelectEvent}
        showAllEvents={true}
        style={style}
      />
    
  )
}

export default AppointmentsCalendar