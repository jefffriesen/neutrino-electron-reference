import React, { Component } from 'react';

export default class Feature extends Component {
  render() {
    return (
      <div>
        <p>
          You can create app features in their own directory. Normally for neutrino.js, Jest will only look in the test/ folder. Because of an override in neutrino-custom.js, Jest will look for and run any test file as long as it follows this pattern:
        </p>
        <ul>
          <li><code>*.test.js</code></li>
          <li><code>*_.test.js</code></li>
          <li><code>*.spec.js</code></li>
          <li><code>*_spec.js</code></li>
          <li><code>.jsx</code></li>
        </ul>

        <h5>Flowtype validation: {exampleFunction(5, 'should succeed')}</h5>
        <h5>Flowtype validation: {exampleFunction('should error', 5)}</h5>
      </div>
    );
  }
}

function exampleFunction(val: number, message: string): string {
  return `Value of ${val}: Custom message: ${message} `;
}
