import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacterID, setCurrentCharacterID] = useState(null)

  const openDetails = id => {
    setCurrentCharacterID(id)
  }

  const closeDetails = () => {
    setCurrentCharacterID(null)
  }

  useEffect(() => {
    axios.get( 'https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log('error')
      })
  }, [])
  const myCharacter = ({info}) => (
    <div className = 'character'>
      {info.name}
      <button onclick = {(event) => openDetails(info.id)}>
        See Details
        </button>
    </div>
  )
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
