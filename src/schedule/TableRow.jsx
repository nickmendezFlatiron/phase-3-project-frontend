import React from 'react'

const TableRow = ({appointment}) => {
  let {id , start , title} = appointment

  start = (new Date(start)).toString().split(" ").slice(0,5).join(" ")
  
  
  return (
    <tr>
      <td>{start}</td>
      <td>{title}</td>
      <td>Walker</td>
      <td>X</td>
    </tr>
  )
}

export default TableRow