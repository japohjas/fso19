import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <p>nimi: <input value={props.newName} onChange={props.handleName} /></p>
      <p>numero: <input value={props.newNumber} onChange={props.handleNumber} /></p>
      <button type="submit">lisää</button>
    </form>
  )
}

export default PersonForm
