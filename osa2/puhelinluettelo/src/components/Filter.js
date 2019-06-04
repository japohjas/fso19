import React from 'react'

const Filter = (props) => {
  return (
    <form>
      rajaa näytettäviä: <input value={props.chars} onChange={props.handleToShow} />
    </form>
  )
}

export default Filter