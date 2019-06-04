import React from 'react'

const Person = (props) => {
  return (
    <div>
      {props.personsToShow.map(n => <PersonToShow key={n.name} name={n.name} number={n.number} id={n.id} removeClick={props.removeClick}/>)}
    </div>
  )
}

const PersonToShow = (props) => {
  return (
    <form>
      <p>{props.name} {props.number} <button value={props.id} onClick={props.removeClick}>delete</button></p>
    </form>
  )
}

export default Person