import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter.js'
import ParentComponent from './components/ParentComponent'
import ParentComponent2 from './components/ParentComponent2.js'
import ParentComponent3 from './components/ParentComponent3'
import { CountProvider } from './components/CountContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Day 21</h1>
      </header>
      <Counter />

      <header className="App-header">
        <h1>Day 22 </h1>
      </header>
      <ParentComponent />

      <header className="App-header">
        <h1>Day 23</h1>
      </header>
      <ParentComponent2 />

      <header className="App-header">
        <h1>Day 24</h1>
      </header>
      <CountProvider>
        <ParentComponent3 />
      </CountProvider>
     
      </div>
    )
  }
}

export default App