import React, { Component } from 'react';
import { sectionStyle } from './shared/styles';

export default function TestingInfo(props) {
  return (
    <div style={sectionStyle}>
      <h3>Writing Tests</h3>
      <p>
        You can create app features in their own directory. Normally for neutrino.js, Jest will only look in the
        {' '}
        <code>test/</code>
        {' '}
        folder. Because of an override in neutrino-custom.js, Jest will look for and run any test file as long as it follows one of these naming patterns:
      </p>
      <ul>
        <li><code>*.test.js</code></li>
        <li><code>*_.test.js</code></li>
        <li><code>*.spec.js</code></li>
        <li><code>*_spec.js</code></li>
        <li><code>.jsx</code></li>
      </ul>
    </div>
  );
}
