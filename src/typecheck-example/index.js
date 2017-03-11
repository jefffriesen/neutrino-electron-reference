import React, { Component } from 'react';

export default class TypecheckExample extends Component {
  render() {
    return (
      <div>
        <h3>Type checking (not yet hooked up)</h3>
        <p>
          Likely going to use tcomb runtime check with is Flow compatible. Waiting on neutrino v5 to set this up
        </p>
        <ul>
          <li>Check should pass: {exampleTypedFn(5, 'should succeed')}</li>
          <li>Check should fail: {exampleTypedFn('should error', 5)}</li>
        </ul>
      </div>
    );
  }
}

function exampleTypedFn(val: number, message: string): string {
  return `Number: ${val}: String: ${message} `;
}
