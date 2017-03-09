import React, { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0
  };

  increaseHanlder = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseHandler = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Hello React + Neutrino + Electron!</h2>
        <h3>Current Count: <span>{counter}</span></h3>
        <div>
          Increment
          <button onClick={this.increaseHanlder}>Up</button>
          <button onClick={this.decreaseHandler}>Down</button>
        </div>
      </div>
    );
  }
}
