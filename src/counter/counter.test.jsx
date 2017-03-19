import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'mobx-react';
import Counter from './counter';

// Basic sanity check that the component renders. Including this with every
// component, along with type checking, catches many (or most?) errors.
// You can add more tests to this file and Jest will pick them up automatically.

// Jest injects globals (describe, beforeEach, it, expect) into the global
// environment when running tests.†
// https://facebook.github.io/jest/docs/api.html
// Setting "env": {"jest": true} in .eslintrc keeps the linter from complaining
describe('<Counter />', () => {
  let store;

  beforeEach(() => {
    store = {};
  });

  it('should render correctly', () => {
    const dom = shallow(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(dom).toHaveLength(1);
  });
});

// † Personally I've never felt comfortable with injecting globals. I would
// rather be explicit. Sometimes a repo can have Jest, Enzyme, Mocha, Karma and
// others all loaded in package.json. I don't know which library is injecting the
// globals so I don't // know where to look up documentation if there are problems.
