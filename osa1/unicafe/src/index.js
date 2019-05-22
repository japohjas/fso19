import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  console.log('propsin arvo on', props)
  const { handleClick, text } = props

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ( { good, neutral, bad } ) => {
  if (good === 0 && neutral === 0 && bad === 0) 
    return (
      <div>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  
  const yhteensa = good + neutral + bad
  const keskiarvo = (good + bad * -1) / yhteensa
  const positiivisia = good / yhteensa * 100  

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td><td>{good}</td>
          </tr>
          <tr>
            <td>neutraali</td><td>{neutral}</td>
          </tr>
          <tr>
            <td>huono</td><td>{bad}</td>
          </tr>
          <tr>
            <td>yhteensä</td><td>{yhteensa}</td>
          </tr>
          <tr>
            <td>keskiarvo</td><td>{keskiarvo}</td>
          </tr>
          <tr>
            <td>positiivisia</td><td>{positiivisia} %</td>
          </tr>
          </tbody>
        </table> 
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setToGood(good + 1)} text='hyvä' />
      <Button handleClick={() => setToNeutral(neutral + 1)} text='neutraali' />
      <Button handleClick={() => setToBad(bad + 1)} text='huono' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
