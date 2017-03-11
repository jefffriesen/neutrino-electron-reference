import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { sectionStyle, counterStyle } from '../shared/styles';

// I love using Mobx but this implementation is primarily a reference for neutrino.js.
// Still, I needed an example of using a decorator so instead of creating
// pointless example decorator function I used Mobx decorators.
// And this example shows a fun alternative to using React's `setState()`
// https://twitter.com/Tholle1234/status/839190894729392130
// https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e#.et2js5w03
@observer
export default class DecoratorsExample extends Component {
  @observable mobxCounter = 0;

  increaseMobxHandler = e => {
    this.mobxCounter++;
  };
  decreaseMobxHandler = e => {
    this.mobxCounter--;
  };

  render() {
    return (
      <div style={sectionStyle}>
        <h3>Decorator example (using Mobx for counter state)</h3>
        Increment {' '}
        <button onClick={this.increaseMobxHandler}>Up</button>
        <button onClick={this.decreaseMobxHandler}>Down</button>{' '}
        <span style={counterStyle}>{this.mobxCounter}</span>
      </div>
    );
  }
}
