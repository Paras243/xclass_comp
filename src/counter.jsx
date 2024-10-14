import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Counter App</h1>
        </div>
        <div>
          <p>Count: {this.state.count}</p>
        </div>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
