import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Welcome from './components/Welcome'
import Incriment from './components/Incriment'
import Toggle from './components/Toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Welcome name="Users">
        <p>Hope you will find something interesting here...</p>
        </Welcome>
        <Greet name="About" heroName="Page">
          <p>In this page you can find on Subscribe button. By clicking that button, you can see the thank you note wriiten by us. One increment button is also there for counting purpose.  </p>
          <p>And In this page you can find on Subscribe button. By clicking that button, you can see the thank you note wriiten by us. </p>
          <p>One increment button is also there for counting purpose.</p>
        </Greet>
        <Greet name="Week" heroName="1">
          <p>Before going for the next please subscirbe, by clicking the bellow subscribe button.</p>
        </Greet>
        <Message />
        <Incriment />
        <br></br>
        <Toggle />
        <Greet name="Visit more pages" heroName="?"></Greet>
      </div>
    )
  }
}

export default App