import React, { Component } from 'react'

class Incriment extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback', this.state.count)
    // })
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)
  }

  incrementFive() {
    console.log('Inside incrementFive')
    this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
  }

  render() {
    return (
      <div>
        <div><h3>Count - {this.state.count}</h3></div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Incriment;