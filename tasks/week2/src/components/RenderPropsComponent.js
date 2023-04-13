import React, { Component } from 'react';
import './myStyles.css'

class RenderPropsComponent extends Component {
  render() {
    return (
      <div className='renderpropc'>
        {this.props.render()}
      </div>
    );
  }
}

export default RenderPropsComponent;