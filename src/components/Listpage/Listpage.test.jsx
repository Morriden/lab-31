import React from 'react';
import { shallow } from 'enzyme';
import Listpage from './Listpage';

describe('List component', () => {
  it('should show a list', () => {
    const wrapper = shallow(
      <Listpage lists={['test 1', 'test 2', 'test 3']}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
