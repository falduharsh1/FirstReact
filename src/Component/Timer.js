import React, { Component } from 'react';

export default class Timer extends Component {

 // 1. Initialize State Value
  constructor(props){
    super(props);

    this.state={
      time : new Date()
    }
  }

  tick = () => {
    this.setState({
      time : new Date()
    })
  }

  // 3.It is Used to sent data recquest to the server . it is called after mounting
  componentDidMount = () => {
   this.timeRef = setInterval(this.tick,1000)
  }

  // 4.it is used to do some work when state or props value changed
  componentDidUpdate = () => {
    console.log("componentDidUpdate");
    
  }

  // 5.it is used to realese resources when we move to data to another computer
  componentWillUnmount = () => {
    clearInterval(this.timeRef)
  }
  

  //2. Display Component
  render() {
    // console.log(this.state.time);
    return (
      <div>
        {this.state.time.toLocaleTimeString()}
      </div>
    );
  }
}
