import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  // console.log('propsin arvo on', props)
  const { handleClick, text } = props
  
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const AnecdoteOfTheDay = ( {anecdote, points} ) => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdote}</p>
      <p>has {points} points</p>
    </div>
  )
}
  
const AnecdoteWithMostVotes = ( {points} ) => {
  // console.log('propsin arvo on', points)
  const maxPoints = Math.max(...points)
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[points.indexOf(maxPoints)]}</p>
      </div>
    )
  }

const App = (props) => {
  const randomIndex = () =>  Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(randomIndex)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  console.log('anecdote numero: ', selected)
  console.log('points', points)

  const setToSelected = newValue => {
    setSelected(newValue)
  }

  const setToPoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdote={anecdotes[selected]} points={points[selected]} />
      <Button handleClick={() => setToPoints(points)} text='vote' />
      <Button handleClick={() => setToSelected(randomIndex)} text='next anecdote' />
      <AnecdoteWithMostVotes points={points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)