import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class App extends Component {
  state = {
    counter: 0
  };

  @observable mobxCounter = 0;

  // Here is an example of a ES 2016 class properties
  // https://babeljs.io/docs/plugins/transform-class-properties/
  increaseHandler = e => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseHandler = e => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // I love using Mobx but this boilerplate is primarily a reference for neutrino.js.
  // Still, I needed an example of using a decorator so instead of creating
  // pointless example decorator function I used Mobx decorators.
  // And this example shows a fun alternative to using React's `setState()`
  // https://twitter.com/Tholle1234/status/839190894729392130
  // https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e#.et2js5w03
  increaseMobxHandler = e => {
    this.mobxCounter++;
  };
  decreaseMobxHandler = e => {
    this.mobxCounter--;
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Hello Neutrino + React + Electron!</h2>

        <div style={sectionStyle}>
          <h3>
            Current React State Counter State:
            {' '}
            <span style={counterStyle}>{counter}</span>
          </h3>
          Increment {' '}
          <button onClick={this.increaseHandler}>Up</button>
          <button onClick={this.decreaseHandler}>Down</button>
        </div>

        <div style={sectionStyle}>
          <h3>
            Current Mobx Counter State:
            {' '}
            <span style={counterStyle}>{this.mobxCounter}</span>
          </h3>
          Increment {' '}
          <button onClick={this.increaseMobxHandler}>Up</button>
          <button onClick={this.decreaseMobxHandler}>Down</button>
          {' '}
          <small>(welcome to the dark side)</small>
        </div>
      </div>
    );
  }
}

const counterStyle = {
  fontWeight: 900,
  color: 'blue'
};

const sectionStyle = {
  marginTop: '50px',
  marginBottom: '50px'
};
