import React from 'react'

const TableRow = ({appointment , walkers}) => {
  let {id , start , title , employee_id} = appointment

  start = (new Date(start)).toString().split(" ").slice(0,5).join(" ")
  const walker = walkers.find(walker => walker.id === employee_id)
  console.log('walker: ', walker)
  return (
    <tr>
      <td>{start}</td>
      <td>{title}</td>
      <td>{walker.employee_name}</td>
      <td>X</td>
    </tr>
  )
}

export default TableRow