import React, { Component } from 'react'
import './App.css'
import PostDetail from './components/PostDetails'
import RegisterUser from './components/RegisterUser'
import Users from './components/User'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <h1>Week 4</h1>
        <h1>PostDetails</h1>
      </header>
      <PostDetail />

      <header>
        <h1>Day 19 task 1</h1>
        <h1>RegisterUser</h1>
      </header>
      <RegisterUser/>

      <header>
        <h1>Day 19 task 2</h1>
        <h1>UserDetail using memo</h1>
      </header>
      <Users/>

      <header>
        <h1>Day 20 task 2</h1>
        <h1>Form and debounce method</h1>
      </header>
      <Form/>
      </div>
    )
  }
}

export default App
