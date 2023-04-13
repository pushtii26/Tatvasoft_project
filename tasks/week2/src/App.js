import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Title from './components/Title'
import Form from './components/Form'
import PureComp from './components/PureComp'
import InputRef from './components/InputRef'
import FocusInput from './components/FocusInput'
import Home from './components/Home'
import RenderPropsComponent from './components/RenderPropsComponent'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Day 6</h1>
        <List />

        <h1>Day 7 </h1>
        <Form />

        <h1>Day 8</h1>
        <PureComp />
        <InputRef />
        <FocusInput />

        <h1>Day 9</h1>
        <Home />
        <RenderPropsComponent render={ () => {
          return (
            <h3> I am coming from render props </h3>
          )
        } } />

        <h1>Day 10</h1>
        <UserProvider value="context provider">
        <ComponentC/>
        </UserProvider>

      </div>
    )
  }
}

export default App