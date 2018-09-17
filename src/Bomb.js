// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    const bombMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return(
      <h1>{bombMessage}</h1>
    )
  }
  
}

export default Bomb
