import React from 'react'

const Filter = (props) => {

  return (
    <form>
      <div>
        Find countries: <input value={props.newShow} onChange={props.handleToShow} />
      </div>
    </form>
  )
}

export default Filter