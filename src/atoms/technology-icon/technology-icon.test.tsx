import React from 'react';
import { shallow } from 'enzyme';
import TechnologyIcon from './technology-icon.component';

describe('<TechnologyIcon />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(
      <TechnologyIcon description="test" imgSrc="test" alt="test" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
