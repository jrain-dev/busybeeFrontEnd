import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1>Welcome to BusyBee!</h1>
      <p>
        BusyBee is a lightweight object detection model
        which can decipher what species a bee is and return
        information based on said species.        </p>
      <div className="card">
          <button onClick={() => document.getElementsByClassName('card').scrollintoView()}>
          Try it out
          </button>           
      </div>

      <div>
        <p>//backend team desc</p>     
        <p>//backend team description </p>
        <p>//frontend team description</p></div>
      

      <div className="card">
          <button>
          Live Detection
          </button> 
          <button>
          Upload Photo(s)
          </button>          
      </div>
    </div>

    
  )
}

export default App
