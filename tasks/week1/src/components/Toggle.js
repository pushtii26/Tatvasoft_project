import React, { Component } from 'react'

class Toggle extends Component {

  constructor() {
    super()
    this.state = {
      message: 'You can see the different msg by clicking this bellow click button.'
    }
  }


  clickHandler = () => {
    this.setState({message:'Yayy..!'})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Toggle;