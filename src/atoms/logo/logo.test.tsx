import React from 'react';
import { shallow } from 'enzyme';
import Logo from './logo.component';

describe('<Logo />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
