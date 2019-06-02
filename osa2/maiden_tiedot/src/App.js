import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
  const [ data, setData ] = useState([])
  const [ chars, setChars ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])
  
  const handleToShow = (event) => {
    console.log('handle to show: ', event.target.value)
    setChars(event.target.value)
  }

  const countriesToShow = data.filter(c => c.name.toLowerCase().includes(chars.toLowerCase()))

  const handleClick = (event) => {
    event.preventDefault();
    console.log('click', event.target.value)
    setChars(event.target.value)
  }

  return (
    <div>
      <Filter chars={chars} handleToShow={handleToShow} />
      <Country countries={countriesToShow} handleClick={handleClick}/>
    </div>
  )
}

export default App;
