import React from 'react'

const Course = ( {course} ) => {
  console.log('course: ' , course)
  return (
   <div>
       <Header course={course.name} />
       <Content parts={course.parts} />
       <Total parts={course.parts} />
   </div>
  )
}

const Header = props => {
  console.log('Header: ', props.course)
  return  (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
  
const Content = props => (
  <div>
    {props.parts.map(n => <Part key={n.id} part={n} />)} 
  </div>
) 

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Total = props => {
  const excerices = props.parts.map(n => n.exercises)
  console.log('excercices: ', excerices)
  const total = excerices.reduce( (s, p) => {
  console.log('reduce: total, value ', s, p)  
  return s + p
  })
  
  return <p>yhteensä {total} tehtävää</p>
}  

export default Course