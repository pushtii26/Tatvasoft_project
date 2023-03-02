import React from 'react'

// function Greet() {
//   return <h1>Hello Pushti</h1>
// }

const Greet = props => {
  return (
    <>
    <h2>
        {props.name} {props.heroName}
      </h2>
      <p>{props.children}</p>
    </>
  )
}

export default Greet;
