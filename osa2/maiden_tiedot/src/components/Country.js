import React from 'react'
import Weather from './Weather'

const Country = ( {countries, handleClick }) => {
  if(countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  console.log('Country props', countries)

  if(countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>languages</h3>
        <ul>
          {country.languages.map((c, i) => <Language key={i} name={c.name} />)}
        </ul>
        <img src={country.flag} alt="" width="400" />
        <Weather country={country.name} city={country.capital} />
      </div>
    )
  }

  return ( 
    <div>
      {countries.map(c => <Countries key={c.name} name={c.name} handleClick={handleClick} />)}
    </div>
  )
}

const Countries = (props) => {
  console.log(props.name)
  return (
    <form>
      <div>
        <p>{props.name} <button value={props.name} onClick={props.handleClick}>show</button></p>
      </div>
    </form>
  )
}

const Language = (props) => {
  return (
    <div>
      <li>
        {props.name}
      </li>
    </div>
  )
} 

export default Country