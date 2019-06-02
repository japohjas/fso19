import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'


const App = () => {
  const [ persons, setPersons] = useState([
  //  { name: 'Arto Hellas', number: '040-123456' },
  //  { name: 'Martti Tienari', number: '040-123456' },
  //  { name: 'Arto Järvinen', number: '040-123456' },
  //  { name: 'Lea Kutvonen', number: '040-123456' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ chars, setChars ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleName = (event) => {
    console.log('handle name: ', event.target.value)
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    console.log('handle number: ', event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)

    if (names.includes(newName)) {
      window.alert(`${newName} on jo luettelossa`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log('lisätty: ', newName, newNumber)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleToShow = (event) => {
    console.log('handle to show: ', event.target.value)
    setChars(event.target.value)
  }
   
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chars.toLowerCase()))

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter  chars={chars} handleToShow={handleToShow} />
      <h3>lisää uusi</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h3>Numerot</h3>
      {personsToShow.map(n => <Person key={n.name} name={n.name} number={n.number} />)}
    </div>
  )

}

export default App
