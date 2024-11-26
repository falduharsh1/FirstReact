import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handle_P = () => {
    if (this.state.count < 5) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  handle_m = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handle_P}>+</button>
        <button onClick={this.handle_m}>-</button>
        <span>
          <h2>{this.state.count}</h2>
        </span>
      </>
    );
  }
}
