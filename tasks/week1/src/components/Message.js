import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;