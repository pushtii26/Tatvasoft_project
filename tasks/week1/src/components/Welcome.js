import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
    <div>
        <h2> Welcome {this.props.name}</h2>
    <p>{this.props.children}</p>
    
    </div> 
    )
  }
}

export default Welcome