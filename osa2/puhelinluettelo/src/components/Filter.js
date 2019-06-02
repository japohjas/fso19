import React from 'react'


const Filter = (props) => {

  return (
    <form>
      <div>
        rajaa näytettäviä: <input value={props.newShow} onChange={props.handleToShow} />
      </div>
    </form>
  )
}

export default Filter