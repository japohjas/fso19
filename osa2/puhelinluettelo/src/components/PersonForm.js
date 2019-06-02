import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        <div>
          <p>nimi: <input value={props.newName} onChange={props.handleName} /></p>
          <p>numero: <input value={props.newNumber} onChange={props.handleNumber} /></p>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm