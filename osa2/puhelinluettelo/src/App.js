import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ chars, setChars ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
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

  const notificatinMessage = (message) => {
    setErrorMessage(
      message
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name)
   
    if (names.includes(newName) && 
        window.confirm(`${newName} is already added to phonbook, replace the old number with a new one?`)) {
      const person = persons.find(p => p.name.includes(newName))
      personService
        .update(person.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
        notificatinMessage(`${newName} new number ${newNumber}`)   
        })
        .catch(error => {
          alert(
            `Information of '${person.name}' has already been removed from server`
          )
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }

    if (names.includes(newName)) {
      setNewName('')
      setNewNumber('')
      return
    }

    personService
      .create(personObject)
      .then(returnedPerson => {   
        setPersons(persons.concat(returnedPerson))
        console.log('lisätty: ', newName, newNumber)
        notificatinMessage(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
      })
  }

  const removeClick = (event) => {
    event.preventDefault()
    const person = persons.find(p => p.id === Number(event.target.value))
    if (!window.confirm(`Delete ${person.name}`)) { 
      return
    }

    const personId = person.id
    personService
      .remove(personId)
    setPersons(persons.filter(person => person.id !== personId)) 
    console.log('removed persons: ', person)  
  }

  const handleToShow = (event) => {
    console.log('handle to show: ', event.target.value)
    setChars(event.target.value)
  }
   
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chars.toLowerCase()))

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Notification message={errorMessage} />
      <Filter  chars={chars} handleToShow={handleToShow} />
      <h3>lisää uusi</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h3>Numerot</h3>
      <Person personsToShow={personsToShow} removeClick={removeClick} />
    </div>
  )
}

export default App
