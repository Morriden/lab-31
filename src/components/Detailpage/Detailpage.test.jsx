import React from 'react';
import { shallow } from 'enzyme';
import Detailpage from './Detailpage';


describe('detailpage component', () => {
  it('should show a name status species and image', () => {
    const wrapper = shallow(
      <Detailpage 
        name='test name' 
        status='test status' 
        species='test species' 
        image='test image'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
