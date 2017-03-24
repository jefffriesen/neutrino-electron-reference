import React, {Component, PropTypes} from 'react';
import {observer, inject} from 'mobx-react';
import {Button, Glyphicon} from 'react-bootstrap';
import styles from './counter.css';

// Example of class decorators
// https://babeljs.io/docs/plugins/transform-decorators/
// Requires `neutrino-preset-decorators`
@inject('store')
@observer
export default class Counter extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  // Example of a ES2016 class properties
  // https://babeljs.io/docs/plugins/transform-class-properties/
  // Requires `neutrino-preset-class-properties`
  increaseHandler = e => {
    this.props.store.increaseCounter();
  };

  decreaseHandler = e => {
    this.props.store.decreaseCounter();
  };

  render() {
    const {store} = this.props;
    const {counter} = store;
    // Example of a failing type assertion. Uncomment this to see the warning
    // console.log('example type failure: ', timesFive('not a number', 5));
    return (
      <div>
        <h4>Simple counter example</h4>
        <Button onClick={this.decreaseHandler}>
          Down <Glyphicon glyph="arrow-down" />
        </Button>
        <Button onClick={this.increaseHandler}>
          Up <Glyphicon glyph="arrow-up" />
        </Button>
        <span className={styles.counterValue}> {counter}</span>
        <h5><small>{timesFive(counter, 'Count times five: ')}</small></h5>
      </div>
    );
  }
}

// An example of a function with typed arguments and typed output.
// I'm using babel-plugin-tcomb which allows runtime assertions and more
// granular types than what Flow provides.
// https://github.com/gcanti/babel-plugin-tcomb.
// You can set it just for the dev environment or keep it in production for
// runtime assertions
function timesFive(num: number, message: string): string {
  return `${message} ${num * 5}`;
}
