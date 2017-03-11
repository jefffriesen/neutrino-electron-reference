import React from 'react';
import { shallow } from 'enzyme';
import Feature from './index';

// Basic sanity check that the component renders. This could be included with
// every component
describe('<Feature />', () => {
  it('should render correctly', () => {
    const dom = shallow(<Feature />);
    expect(dom).toHaveLength(1);
  });
});
