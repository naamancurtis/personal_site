import React from 'react';
import { shallow } from 'enzyme';
import {
  PressButton,
  CodeButton,
  LiveButton,
} from './plain-text-button.component';

describe('<PressButton />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<PressButton url="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CodeButton />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<CodeButton url="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<LiveButton />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(<LiveButton url="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
