  // <Bomb />
  //   ✓ should set the `secondsLeft` to the value of the `initialCount` prop
  //   ✓ render the correct text when the timer is not 0
  //   ✓ render the correct text when the timer is 0

import React, { Component } from 'react'
 class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
   updateDisplay = () => {
    if (this.state.secondsLeft === 0) {
      return "Boom!"
    }
    else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
   render() {
    return (
      <div>{this.updateDisplay()}</div>
    )
  }
}
 export default Bomb;
