import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './submit-button.component';

describe('<SubmitButton />', () => {
  it('expect to render component', () => {
    const wrapper = shallow(
      <SubmitButton
        text="test"
        icon={['fas', 'circle']}
        buttonClicked={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
