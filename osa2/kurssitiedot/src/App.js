import React from 'react'
import Course from './components/Course';

const App = ({ courses }) => {
  const rows = () => courses.map(n =>
    <Course
      key={n.id}
      course={n}
    />
  )

  return (
    <div>
      <h1>Opetusohjelma</h1>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App;
