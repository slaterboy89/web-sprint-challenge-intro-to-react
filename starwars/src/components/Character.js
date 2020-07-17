// Write your Character component here
import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'

const StyledCharacter = styled.div`
border: 2px solid green;
margin-left: 20%;
margin-right:20%;
h2, p{
    color: white;
    font-family: hammerkeys
}

`
export default function Character(props) {
    
return (
    <StyledCharacter className='App'>
        <h2>{props.name} Details:</h2>    
        <p>Name: {props.name}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Eye Color: {props.eye_color}</p>
  </StyledCharacter>
)
}
