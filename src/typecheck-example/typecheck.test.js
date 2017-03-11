import React from 'react';
import { shallow } from 'enzyme';
import TypecheckExample from './index';

// Basic sanity check that the component renders.
// This could be included with every component
describe('<TypecheckExample />', () => {
  it('should render correctly', () => {
    const dom = shallow(<TypecheckExample />);
    expect(dom).toHaveLength(1);
  });
});
