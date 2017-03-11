import React, { Component } from 'react';
import DecoratorsExample from './decorator-example';
import TypecheckExample from './typecheck-example';
import TestingInfo from './TestingInfo';
import { sectionStyle, counterStyle } from './shared/styles';

export default class App extends Component {
  state = {
    counter: 0
  };

  // Example of a ES2016 class properties https://babeljs.io/docs/plugins/transform-class-properties/
  increaseHandler = e => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseHandler = e => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Hello Neutrino + React!</h2>

        <div style={sectionStyle}>
          <h3>Current React State Counter State</h3>
          Increment {' '}
          <button onClick={this.increaseHandler}>Up</button>
          <button onClick={this.decreaseHandler}>Down</button>{' '}
          <span style={counterStyle}>{counter}</span>
        </div>

        <DecoratorsExample />
        <TestingInfo />
        <TypecheckExample />
      </div>
    );
  }
}
